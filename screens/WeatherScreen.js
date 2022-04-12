import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function WeatherScreen({ navigation, route }) {

    const { name } = route.name

    return (
    <SafeAreaView styles={styles.container}>
        <Text>WeatherScreen</Text>
        <Text>{JSON.stringify(name)}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
