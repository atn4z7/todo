import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProps, UpdateAction } from 'types'
import Header from 'views/common/Header'
import Background from 'views/common/Background'
import ActionButton from 'views/common/ActionButton'
import Todos from './Todos'

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>()

  const goToCreateTodo = () => {
    navigation.navigate('UpdateTodo', { updateAction: UpdateAction.Add })
  }

  return (
    <Background>
      <StatusBar barStyle="dark-content" />
      <Header title="My Tasks" />
      <Todos />
      <ActionButton onPress={goToCreateTodo} />
    </Background>
  )
}

export default Home
