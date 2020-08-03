import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import styles from './styles'

const animation = require('../../../assets/animations/man-drink-cofee.json')

const CoffeeAndChill = () => {
  return (
    <View style={styles.container}>
      <LottieView autoPlay source={animation} loop style={styles.animation} />
    </View>
  )
}

export default CoffeeAndChill
