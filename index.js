/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './app/index'
import { name as appName } from './app.json'

// warnings in react-native-material-textfield
YellowBox.ignoreWarnings(['useNativeDriver'])
YellowBox.ignoreWarnings(['prop type'])

AppRegistry.registerComponent(appName, () => App)
