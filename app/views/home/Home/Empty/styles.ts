import { StyleSheet } from 'react-native'
import { dimension } from 'styles'

const CONTAINER_MARGIN_TOP = dimension.fullHeight * 0.08

export default StyleSheet.create({
  container: {
    marginTop: CONTAINER_MARGIN_TOP
  },
  textContainer: {
    alignItems: 'center'
  }
})
