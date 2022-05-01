import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

export default function WeatherScreen({ navigation, route }) {

    const { city } = route.params;
    const [data, setData] = useState({});
    const [icon, setIcon] = useState([]);

    const cityName = JSON.stringify(city).replace(/\"/g,"");

    const api_key = "08ff95f3b0f97607b3b375dc9793f8b2";

    useEffect(() => {
        const getWeather = async () => {
            try {
                // console.log(lat," is lat and ",lng);
                const response = (await fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + cityName + '&appid='+api_key+''));
                const json = (await response.json());
                setData(json.main);
                setIcon(json.weather)
                console.log(json.temp, 'get weather');
            } catch (error) {
                console.error(error);
            } finally {
           }
        }
        getWeather()
    }, [])

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.test}>
            <TouchableOpacity
            style={{backgroundColor: '#000', }}
            onPress={() => navigation.goBack()}
            >
                <Text style={{color:'white'}}>go back</Text>
            </TouchableOpacity>
            {/* <Text>{JSON.stringify(city)}</Text> */}
            <Text>{cityName}</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {cityName}
            </Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'darkgrey'
    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
