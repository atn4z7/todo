import { StyleSheet } from 'react-native'
import { color, size, dimension } from 'styles'

const MARGIN_VERTICAL = dimension.fullHeight * 0.01

export default StyleSheet.create({
  container: {
    width: size.button.width,
    height: size.button.height,
    borderRadius: size.roundness,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: MARGIN_VERTICAL
  },
  disabled: {
    backgroundColor: color.line
  },
  primaryContainer: {
    backgroundColor: color.primary
  },
  secondaryContainer: {
    backgroundColor: color.background,
    borderColor: color.line,
    borderWidth: size.thinLine
  },
  primaryText: {
    color: color.onPrimary
  },
  secondaryText: {
    color: color.error
  }
})
