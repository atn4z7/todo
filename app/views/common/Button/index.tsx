import React from 'react'
import { View, TouchableOpacity, ViewStyle } from 'react-native'
import Text from '../Text'
import styles from './styles'

type ButtonProps = {
  variation: 'primary' | 'secondary'
  label: string
  disabled: boolean
  onPress: () => void
}

const Button = ({ variation, label, disabled, onPress }: ButtonProps) => {
  let textStyle
  let containerStyle: ViewStyle[] = [styles.container]

  if (variation === 'primary') {
    containerStyle.push(styles.primaryContainer)
    disabled && containerStyle.push(styles.disabled)
    textStyle = styles.primaryText
  } else {
    containerStyle.push(styles.secondaryContainer)
    textStyle = styles.secondaryText
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={containerStyle}>
        <Text variation="button" style={textStyle}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  variation: 'primary',
  disabled: false
}

export default Button
