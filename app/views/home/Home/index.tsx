import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProps, UpdateAction } from 'types'
import Header from 'views/common/Header'
import Background from 'views/common/Background'
import ActionButton from 'views/common/ActionButton'
import { color } from 'styles'
import Todos from './Todos'

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>()

  const goToCreateTodo = () => {
    navigation.navigate('UpdateTodo', { updateAction: UpdateAction.Add })
  }

  const renderStatusBar = () => {
    if (Platform.OS === 'ios') {
      return <StatusBar barStyle="dark-content" />
    }
    return (
      <StatusBar
        barStyle="dark-content"
        backgroundColor={color.androidStatusBar}
      />
    )
  }

  return (
    <Background>
      {renderStatusBar()}
      <Header title="My Tasks" />
      <Todos />
      <ActionButton onPress={goToCreateTodo} />
    </Background>
  )
}

export default Home
