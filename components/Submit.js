import {View,
    Text,
    TextInput,
    Button
    } from 'react-native';
import React, { useState } from 'react'

export default function Submit () {
    const [phrase,setPhrase] = useState('');
    const [author,setAuthor] = useState('');
    return (
        <View>
            <Text>Submit your favorite phrase!</Text>
            <TextInput
            placeholder='Write your phrase here'
            onChangeText={text => setPhrase(text)}
            />
            <TextInput
            placeholder='Write the author of the phrase here'
            onChangeText={text => setAuthor(text)}
            />
            <Text>
                {phrase} , {author}
            </Text>
        </View>
    )
}