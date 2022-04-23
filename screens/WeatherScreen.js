import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WeatherScreen({ navigation, route }) {

    const { city } = route.params

    const cityName = JSON.stringify(city).replace(/\"/g,"")

    return (
    <SafeAreaView styles={styles.container}>
        <View style={styles.test}>
            <TouchableOpacity
            style={{backgroundColor: '#000', }}
            // </View>onPress={navigation.navigate("Intro")}
            >
                <Text style={{color:'white'}}>go back</Text>
            </TouchableOpacity>
            <Text>WeatherScreen</Text>
            <Text>{JSON.stringify(city)}</Text>
            <Text>{cityName}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
