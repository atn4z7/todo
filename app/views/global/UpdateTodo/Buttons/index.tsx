import React from 'react'
import { View } from 'react-native'
import Button from 'views/common/Button'
import { UpdateAction } from 'types'
import styles from './styles'

type ButtonsProps = {
  updateAction: UpdateAction
  updateDisabled: boolean
  onCreate: () => void
  onUpdate: () => void
  onDelete: () => void
}

const Buttons = ({
  updateAction,
  updateDisabled,
  onCreate,
  onUpdate,
  onDelete
}: ButtonsProps) => {
  if (updateAction === UpdateAction.Add) {
    return (
      <View style={styles.buttonContainer}>
        <Button
          label="Create"
          variation="primary"
          onPress={onCreate}
          disabled={updateDisabled}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.buttonContainer}>
        <Button label="Delete" variation="secondary" onPress={onDelete} />
        <Button
          label="Update"
          variation="primary"
          onPress={onUpdate}
          disabled={updateDisabled}
        />
      </View>
    )
  }
}

export default Buttons
