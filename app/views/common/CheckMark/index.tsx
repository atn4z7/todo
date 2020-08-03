import React from 'react'
import { View, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'
import styles from './styles'

const animationData = require('../../../assets/animations/check-mark.json')

type CheckMarkProps = {
  initialValue: boolean
  onValueChange: (value: boolean) => void
}

class CheckMark extends React.Component<CheckMarkProps> {
  state = {
    value: this.props.initialValue,
    progress: new Animated.Value(this.props.initialValue ? 1 : 0)
  }

  animateTo = (value: boolean, animationValue: number, duration: number) => {
    const callback = () => {
      const { onValueChange } = this.props
      this.setState({ value })
      onValueChange && onValueChange(value)
    }

    Animated.timing(this.state.progress, {
      toValue: animationValue,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(callback)
  }

  check = () => {
    if (this.state.value) {
      this.animateTo(false, 0, 0)
    } else {
      this.animateTo(true, 1, 300)
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.check}>
        <View style={styles.container}>
          <LottieView
            source={animationData}
            progress={this.state.progress}
            loop={false}
            resizeMode="cover"
            style={styles.animation}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default CheckMark
