import React from 'react'
import { Text as RNText, TextStyle } from 'react-native'
import styles from './styles'

// https://material.io/design/typography/the-type-system.html
type TextProps = {
  variation: 'headline' | 'subTitle' | 'body' | 'caption' | 'button'
  numberOfLines: number
  children: React.ReactNode
  style?: TextStyle
}

const Text = ({ variation, numberOfLines, children, style }: TextProps) => {
  const combinedStyle = [styles[variation], style]

  return (
    <RNText style={combinedStyle} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  )
}

Text.defaultProps = {
  variation: 'caption',
  numberOfLines: 1
}

export default Text
