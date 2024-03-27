import React from 'react'
import { GlobalContextProvider } from './components/Context'
import Home from './components/Home'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default function App() {
    return (
        <GlobalContextProvider>
            <Home Stack={Stack} />
        </GlobalContextProvider>
    )
}
