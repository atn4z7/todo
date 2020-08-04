# Getting started

### Install app dependencies

In root folder, run `yarn install`

### Run The App

There are 2 ways to build and run the app locally:

-   **Via official IDEs**: Xcode (iOS), Android Studio (Android)
-   **Via command line**: `yarn ios` and `yarn android`

If you have an Android device, you can also install the release [apk file](https://github.com/anguyen1817/todo/raw/master/files/app-release.apk) to try out the app.

# Features
### Current

- Create/update/remove task
- View all pending & completed tasks
- All tasks are persisted throughout app session

# App Demo

https://vimeo.com/444395136

<img src="https://github.com/anguyen1817/todo/blob/master/files/screenshot.png?raw=true" width="300" />


# Technical details
## Code structure
#### app folder

```
.
├── assets              # images, animations 
├── navigators          # navigation system
├── store               # redux store and reducers, actions, sagas (grouped by features)
├── styles              # design system: color, font, size, dimension
├── utils               # utilities: time, id,...
└── views               # UI components (grouped by navigation routes)
```
      
#### path aliases

```
actions                 # redux actions
selectors               # redux selectors
styles                  # design system
views                   # UI components
types                   # global typescript types
utils                   # utilities
```

## Some Dependencies

#### animation: [lottie-react-native](https://airbnb.io/lottie/#/README)

#### navigation: [react-navigation](https://reactnavigation.org/)

#### datetime picker: [react-native-modal-datetime-picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker)

#### data persistence: [redux-persist](https://github.com/rt2zz/redux-persist)

#### text input: [react-native-material-textfield](https://github.com/n4kz/react-native-material-textfield)

#### state management: [redux](https://redux.js.org/) & [react hooks](https://reactjs.org/docs/hooks-intro.html)

## Animation Credits

#### Checked Done by LottieFiles: [link](https://lottiefiles.com/433-checked-done)

#### Student university character by Alviarez Hernan: [link](https://lottiefiles.com/28705-student-university-character)

