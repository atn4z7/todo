import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity, LayoutAnimation } from 'react-native'
import { Todo } from 'types'
import Text from 'views/common/Text'
import TodoItem from '../TodoItem'
import styles from '../styles'

const Completed = ({ data }: { data: Todo[] }) => {
  const [visible, setVisible] = useState(false)
  const count = data.length

  if (count === 0) {
    return null
  }

  const keyExtractor = (item: Todo) => item.id

  const renderSeparator = () => {
    return <View style={styles.separator} />
  }

  const renderItem = ({ item }: { item: Todo }) => {
    return <TodoItem data={item} />
  }

  const renderLabel = () => {
    const label = `Completed (${count})`
    const arrow = visible ? '\u25B2' : '\u25BC'
    const onPress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      setVisible(!visible)
    }

    return (
      <TouchableOpacity style={styles.headerContainer} onPress={onPress}>
        <Text variation="subTitle">{label}</Text>
        <Text variation="caption"> {arrow}</Text>
      </TouchableOpacity>
    )
  }

  const renderList = () => {
    if (!visible) {
      return null
    }

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        scrollEnabled={false}
      />
    )
  }

  return (
    <>
      {renderLabel()}
      {renderList()}
    </>
  )
}

export default Completed
