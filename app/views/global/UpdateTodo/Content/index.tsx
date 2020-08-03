import React from 'react'
import { ScrollView, View } from 'react-native'
import TextInput from 'views/common/TextInput'
import DateInput from 'views/common/DateInput'
import Switch from 'views/common/Switch'
import { fieldKeys } from '../utils'
import styles from './styles'

type ContentProps = {
  title: string
  description: string
  dueDate: string
  onChangeText: (key: string) => (text: string) => void
  completed: boolean
  showCompleted: boolean
  toggleCompleted: (value: boolean) => void
}

const Content = ({
  title,
  description,
  dueDate,
  showCompleted,
  completed,
  onChangeText,
  toggleCompleted
}: ContentProps) => {
  const renderCompleted = () => {
    if (!showCompleted) {
      return null
    }
    return (
      <Switch
        label="Completed?"
        isEnabled={completed}
        toggleSwitch={toggleCompleted}
      />
    )
  }

  return (
    <ScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <TextInput
          label={'Title'}
          onChangeText={onChangeText(fieldKeys.TITLE)}
          value={title}
          maxLength={100}
        />
        <TextInput
          label={'Description'}
          onChangeText={onChangeText(fieldKeys.DESC)}
          value={description}
          maxLength={300}
        />
        <DateInput
          label="Due Date"
          value={dueDate}
          onChangeValue={onChangeText(fieldKeys.DUE_DATE)}
        />
        {renderCompleted()}
      </View>
    </ScrollView>
  )
}

export default Content
