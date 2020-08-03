import { dimension } from './dimension'

export const size = {
  hitSlop: { top: 10, left: 10, bottom: 10, right: 10 },
  horizontalMargin: dimension.fullWidth * 0.14,
  roundness: 4,
  thinLine: 1,
  button: {
    width: dimension.fullWidth * 0.84,
    height: dimension.fullHeight * 0.07
  }
}
