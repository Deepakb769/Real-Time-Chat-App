import React, { useState } from 'react'
import {View, Text, Button, Stylesheet} from 'react-native'

const CounterButton = () => {
    const [count, setCount] = useState(0)

  return (
    <View>
        <Text>Counter Button</Text>
        <Button>
            {count}
        </Button>
    </View>
  )
}

export default CounterButton
