import { StyleSheet } from 'react-native'
import { dimension } from 'styles'

const MARGIN_HORIZONTAL = -dimension.fullWidth * 0.04
const ANIMATION_WIDTH = dimension.fullWidth * 0.23

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: MARGIN_HORIZONTAL
  },
  animation: {
    width: ANIMATION_WIDTH
  }
})
