import React, { useState } from 'react'
import { View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Header from 'views/common/Header'
import Background from 'views/common/Background'
import { StoreState, UpdateAction, UpdateTodoSceneProps } from 'types'
import { todosActions } from 'actions'
import { todosSelectors } from 'selectors'
import { generateId } from 'utils/id'
import { fieldKeys, getStatus, getCompletedValue } from './utils'
import Content from './Content'
import Buttons from './Buttons'
import styles from './styles'

const { add, edit, remove } = todosActions
const { getTodo } = todosSelectors

type UpdateTodoProps = PropsFromRedux

const UpdateTodo = ({
  item,
  updateAction,
  addTodo,
  editTodo,
  removeTodo
}: UpdateTodoProps) => {
  const [title, setTitle] = useState(item.title || '')
  const [description, setdescription] = useState(item.description || '')
  const [dueDate, setDueDate] = useState(item.dueDate || '')
  const [completed, setCompleted] = useState(getCompletedValue(item.status))
  const navigation = useNavigation<UpdateTodoSceneProps['navigation']>()

  const onChangeText = (key: string) => (text: string) => {
    if (key === fieldKeys.TITLE) {
      setTitle(text)
    } else if (key === fieldKeys.DESC) {
      setdescription(text)
    } else if (key === fieldKeys.DUE_DATE) {
      setDueDate(text)
    }
  }

  const renderContent = () => {
    const toggleCompleted = () =>
      setCompleted((previousState) => !previousState)
    const showCompleted = updateAction === UpdateAction.Edit

    return (
      <Content
        title={title}
        description={description}
        dueDate={dueDate}
        completed={completed}
        onChangeText={onChangeText}
        toggleCompleted={toggleCompleted}
        showCompleted={showCompleted}
      />
    )
  }

  const renderHeader = () => {
    const headerText =
      updateAction === UpdateAction.Add ? 'Add Task' : 'Edit Task'
    return <Header title={headerText} />
  }

  const renderButtons = () => {
    const updateDisabled = title === '' || description === '' || dueDate === ''

    const onDelete = () => {
      removeTodo({ id: item.id })
      navigation.goBack()
    }

    const onCreate = () => {
      addTodo({
        id: generateId(),
        title,
        description,
        dueDate
      })
      navigation.goBack()
    }

    const onUpdate = () => {
      editTodo({
        id: item.id,
        title,
        description,
        dueDate,
        status: getStatus(completed)
      })
      navigation.goBack()
    }

    return (
      <Buttons
        updateAction={updateAction}
        updateDisabled={updateDisabled}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    )
  }

  return (
    <Background>
      <View style={styles.container}>
        {renderHeader()}
        {renderContent()}
        {renderButtons()}
      </View>
    </Background>
  )
}

const mapStateToProps = (state: StoreState, props: UpdateTodoSceneProps) => {
  // @ts-expect-error
  const { updateAction, id } = props.route.params
  const item = getTodo(state, id)
  return { item, updateAction }
}

const mapDispatchToProps = {
  addTodo: add,
  editTodo: edit,
  removeTodo: remove
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UpdateTodo)
