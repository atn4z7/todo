import { StyleSheet } from 'react-native'
import { color, font } from 'styles'

export default StyleSheet.create({
  headline: {
    color: color.text,
    fontSize: font.size.xxxl,
    fontWeight: '700'
  },
  subTitle: {
    color: color.text,
    fontSize: font.size.l,
    fontWeight: '500'
  },
  body: {
    color: color.text,
    fontSize: font.size.m,
    lineHeight: font.size.m * 1.7,
    fontWeight: '400'
  },
  caption: {
    color: color.textLight,
    fontSize: font.size.s,
    fontWeight: '300'
  },
  button: {
    color: color.text,
    fontSize: font.size.m,
    fontWeight: '500'
  }
})
