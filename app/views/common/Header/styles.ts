import { StyleSheet } from 'react-native'
import { dimension, size } from 'styles'

const MARGIN_TOP = dimension.fullHeight * 0.05
const MARGIN_BOTTOM = dimension.fullHeight * 0.035

export default StyleSheet.create({
  container: {
    marginHorizontal: size.horizontalMargin,
    marginTop: MARGIN_TOP,
    marginBottom: MARGIN_BOTTOM
  }
})
