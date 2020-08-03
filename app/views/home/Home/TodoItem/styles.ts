import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '78%'
  },
  completedText: {
    textDecorationLine: 'line-through'
  }
})
