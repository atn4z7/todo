import React from 'react'
import { View, TouchableOpacity, LayoutAnimation } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Text from 'views/common/Text'
import CheckMark from 'views/common/CheckMark'
import {
  Todo,
  HomeScreenNavigationProps,
  UpdateAction,
  TodoStatus
} from 'types'
import { todosActions } from 'actions'
import styles from './styles'

const { edit } = todosActions

type TodoItemProps = {
  data: Todo
} & PropsFromRedux

const TodoItem = ({ data, editTodo }: TodoItemProps) => {
  const navigation = useNavigation<HomeScreenNavigationProps>()
  const { id, title, description, status } = data
  const completed = status === TodoStatus.Completed
  const titleStyle = completed ? styles.completedText : {}

  const goToEdit = () => {
    navigation.navigate('UpdateTodo', { updateAction: UpdateAction.Edit, id })
  }

  const updateStatus = (value: boolean) => {
    const newStatus = value ? TodoStatus.Completed : TodoStatus.Pending
    editTodo({ ...data, status: newStatus })
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  return (
    <TouchableOpacity key={id} onPress={goToEdit}>
      <View style={styles.container}>
        <CheckMark initialValue={completed} onValueChange={updateStatus} />
        <View style={styles.infoContainer}>
          <Text variation="body" style={titleStyle}>
            {title}
          </Text>
          <Text variation="caption">{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = {
  editTodo: edit
}

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(TodoItem)
