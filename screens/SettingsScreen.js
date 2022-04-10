import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation}) {
    return (
    <SafeAreaView styles={styles.container}>
    <View style={styles.test}>
        <Text>test the waters settings screen</Text>
        <Image style={{height: 50, width: 50}} source={{uri: 'https://openweathermap.org/img/wn/01n@2x.png'}}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    test: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
