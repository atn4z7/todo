import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from 'types'
import BackArrow from 'views/common/BackArrow'
import Home from 'views/home/Home'
import UpdateTodo from 'views/global/UpdateTodo'

const Stack = createStackNavigator<RootStackParamList>()

const transparentHeaderOptions = {
  headerTransparent: true,
  headerTitle: ''
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateTodo"
          component={UpdateTodo}
          options={{
            ...transparentHeaderOptions,
            headerLeft: BackArrow
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
