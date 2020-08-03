import React from 'react'
import { View } from 'react-native'
import CoffeeAndChill from 'views/common/CoffeeAndChill'
import Text from 'views/common/Text'
import styles from './styles'

const Empty = () => (
  <View style={styles.container}>
    <CoffeeAndChill />
    <View style={styles.textContainer}>
      <Text variation="subTitle">Add your first task</Text>
      <Text variation="body">Tap the button below!</Text>
    </View>
  </View>
)

export default Empty
