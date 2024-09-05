import React from 'react'
import { View, Text, TextInput } from 'react-native'
import InputStyles from './InputStyles'

const Input = function({ title, variable, set }) {
    return (
        <View style={InputStyles.layout}>
            <Text style={InputStyles.title}>{title}</Text>
            <TextInput 
                    style={InputStyles.input}
                    onChangeText={set}
                    value={variable}
            />
        </View>
    )
}

export default Input