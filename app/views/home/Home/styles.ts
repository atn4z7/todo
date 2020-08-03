import { StyleSheet } from 'react-native'
import { dimension, color, size } from 'styles'

const SEPARATOR_WIDTH = dimension.fullWidth * 0.86
const HEADER_MARGIN_HORIZONTAL = dimension.fullWidth * 0.05

export default StyleSheet.create({
  separator: {
    height: size.thinLine,
    width: SEPARATOR_WIDTH,
    backgroundColor: color.lineLight,
    marginLeft: size.horizontalMargin
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: HEADER_MARGIN_HORIZONTAL
  }
})
