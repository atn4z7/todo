import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { size } from 'styles'
import styles from './styles'

const addImg = require('../../../assets/images/add.png')

type ActionButtonProps = {
  onPress: () => void
}

const ActionButton = ({ onPress }: ActionButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={size.hitSlop}
      onPress={onPress}>
      <Image style={styles.image} source={addImg} />
    </TouchableOpacity>
  )
}

export default ActionButton
