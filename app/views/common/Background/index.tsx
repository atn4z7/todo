import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from './styles'

type BackgroundProps = {
  children: React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

export default Background
