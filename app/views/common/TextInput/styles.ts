import { StyleSheet } from 'react-native'
import { dimension, size } from 'styles'

const MARGIN_VERTICAL = dimension.fullHeight * 0.014

export default StyleSheet.create({
  container: {
    marginVertical: MARGIN_VERTICAL
  },
  inputContainer: {
    width: size.button.width
  }
})
