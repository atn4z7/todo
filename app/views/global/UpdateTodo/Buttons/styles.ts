import { StyleSheet } from 'react-native'
import { dimension } from 'styles'

const BUTTON_MARGIN_BOTTOM = dimension.fullHeight * 0.03

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginBottom: BUTTON_MARGIN_BOTTOM
  }
})
