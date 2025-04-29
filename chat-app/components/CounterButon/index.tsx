import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterButton = () => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount((prev) => prev + 1)
    }

  return (
    <View style = {{marginTop: 50, display: 'flex', alignItems: 'center'}}>
      <Text style={{padding: 20}}>Counter: {count}</Text>
      <Button title='increase-count' onPress={handleCount}  />
    </View>
  )
}

export default CounterButton
