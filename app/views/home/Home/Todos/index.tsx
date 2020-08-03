import React from 'react'
import { View, SectionList, SectionListData } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { StoreState, Todo } from 'types'
import { todosSelectors } from 'selectors'
import { getFormattedDate } from 'utils/time'
import Text from 'views/common/Text'
import { generateSectionListData } from './utils'
import Empty from '../Empty'
import TodoItem from '../TodoItem'
import Completed from '../Completed'
import styles from '../styles'

const { getPendingTodos, getCompletedTodos } = todosSelectors

type TodosProps = PropsFromRedux

const Todos = ({ pendingTodos, completedTodos }: TodosProps) => {
  if (pendingTodos.length === 0 && completedTodos.length === 0) {
    return <Empty />
  }

  const keyExtractor = (item: Todo) => item.id

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderItem = ({ item }: { item: Todo }) => {
    return <TodoItem data={item} />
  }

  const renderSectionHeader = ({
    section
  }: {
    section: SectionListData<Todo>
  }): React.ReactElement => {
    const title = getFormattedDate(section.title)

    return (
      <Text variation="subTitle" style={styles.headerContainer}>
        {title}
      </Text>
    )
  }

  return (
    <SectionList
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      renderSectionHeader={renderSectionHeader}
      sections={generateSectionListData(pendingTodos)}
      stickySectionHeadersEnabled={false}
      ListFooterComponent={<Completed data={completedTodos} />}
    />
  )
}

const mapStateToProps = (state: StoreState) => ({
  pendingTodos: getPendingTodos(state),
  completedTodos: getCompletedTodos(state)
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Todos)
