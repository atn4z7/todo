import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { getFormattedDateTime } from 'utils/time'
import moment from 'moment'
import TextInput from '../TextInput'

type DateInputProps = {
  label: string
  value: string
  onChangeValue: (date: string) => void
}

const DateInput = ({ label, value, onChangeValue }: DateInputProps) => {
  const [showPicker, setShowPicker] = useState(false)

  const now = new Date()
  const formattedDate = getFormattedDateTime(value)

  const showDatePicker = () => setShowPicker(true)
  const hideDatePicker = () => setShowPicker(false)

  const handleChange = (date: Date) => {
    hideDatePicker()
    const dateStr = moment(date).toISOString()
    onChangeValue(dateStr)
  }

  return (
    <>
      <TouchableOpacity onPress={showDatePicker}>
        <View pointerEvents="none">
          <TextInput label={label} value={formattedDate} />
        </View>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={showPicker}
        onCancel={hideDatePicker}
        onConfirm={handleChange}
        minimumDate={now}
        mode={'datetime'}
      />
    </>
  )
}

export default DateInput
