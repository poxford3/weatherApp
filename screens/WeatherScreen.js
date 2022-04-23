import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function WeatherScreen({ navigation, route }) {

    const { city } = route.params

    console.log({city})

    return (
    <View styles={styles.container}>
        <Text>WeatherScreen</Text>
        <Text>{JSON.stringify(city)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
