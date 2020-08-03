import React from 'react'
import { OutlinedTextField } from 'react-native-material-textfield'
import { color } from 'styles'
import styles from './styles'

type TextInputProps = {
  label: string
  onChangeText?: (text: string) => void
  value: string
  maxLength?: number
}

const TextInput = ({
  label,
  onChangeText,
  value,
  maxLength
}: TextInputProps) => {
  return (
    <OutlinedTextField
      label={label}
      onChangeText={onChangeText}
      value={value}
      maxLength={maxLength}
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
      baseColor={color.line}
      tintColor={color.primary}
      multiline={true}
    />
  )
}

export default TextInput
