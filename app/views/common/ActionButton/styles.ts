import { StyleSheet } from 'react-native'
import { color, dimension } from 'styles'

const BUTTON_COLOR = color.primary

const BUTTON_SIZE = dimension.fullWidth * 0.15
const ITEM_BUTTON_SIZE = BUTTON_SIZE * 0.35

const OFFSET_X = dimension.fullWidth * 0.065
const OFFSET_Y = dimension.fullHeight * 0.055

export default StyleSheet.create({
  container: {
    position: 'absolute',
    right: OFFSET_X,
    bottom: OFFSET_Y,
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    backgroundColor: BUTTON_COLOR,
    borderRadius: BUTTON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: ITEM_BUTTON_SIZE,
    width: ITEM_BUTTON_SIZE
  }
})
