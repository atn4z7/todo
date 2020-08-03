import React from 'react'
import { View, Switch as RNSwitch } from 'react-native'
import { color } from 'styles'
import Text from '../Text'
import styles from './styles'

type SwitchProps = {
  label: string
  isEnabled: boolean
  toggleSwitch: (value: boolean) => void
}

const Switch = ({ label, isEnabled, toggleSwitch }: SwitchProps) => {
  return (
    <View style={styles.container}>
      <Text variation="caption">{label}</Text>
      <RNSwitch
        trackColor={{ false: color.line, true: color.primary }}
        ios_backgroundColor={color.line}
        thumbColor={isEnabled ? color.background : color.background}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Switch
