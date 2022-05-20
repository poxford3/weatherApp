import React, { useState, useEffect } from 'react'
import { ActivityIndicator,
         View, 
         Text, 
         StyleSheet, 
         SafeAreaView, 
         TouchableOpacity,
         Image } from 'react-native'
import { color } from 'react-native-elements/dist/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';

export default function WeatherScreen({ navigation, route }) {

    const { city } = route.params;
    const [city1, setCity1] = useState("");
    const [data, setData] = useState({});
    const [icon, setIcon] = useState([]);
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [iconValue, setIconValue] = useState("");
    const [isLoading, setLoading] = useState(true);

    const cityName = JSON.stringify(city).replace(/\"/g,"");
    const api_key = "08ff95f3b0f97607b3b375dc9793f8b2";

    console.log('-------------')

    const getWeather = async () => {
        try {
            console.log('https://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + cityName + '&appid='+api_key+'')
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + cityName + '&appid='+api_key+'')
                const json = await response.json();
                console.log('web response:', json.cod)
                if (json.cod == '200') {
                    setData(json.main);
                    setIcon(json.weather);
                    setCity1(json.name);
                    setDate(Date(json.dt).split(' ')[1] +' '+ Date(json.dt).split(' ')[2] +', '+ Date(json.dt).split(' ')[3]);
                    // console.log(Date(json.dt));
                    // console.log(Moment(date).format("MMM D, yyyy"))
                    console.log(date)
                    console.log(typeof json)
                    getWeatherSymbol(); 
                } else {
                    console.log(json, 'didnt work')
                }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
       }
    }

    const getWeatherSymbol = () => {
                icon.map(x => console.log(x.icon))
                icon.map(x => setIconValue(x.icon))
                icon.map(x => console.log(x.description))
                icon.map(x => setDesc(x.description));
                console.log(desc) 
                // console.log(`http://openweathermap.org/img/wn/${iconValue}@2x.png`)
            }

    useEffect(() => {
        getWeather()
    }, [])

    const isLoaded = () => {
        return(
        <>
        <View style={styles.header}>
            <View style={styles.backButton}>
                <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigation.goBack()}
                >
                    {/* <Text style={{color:'white'}}>go back</Text> */}
                    <Ionicons name='arrow-back-outline' size={30} color='black'/>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>
                {city1}
            </Text>
            <View style={{width: 30}}></View>
        </View>
        <View style={styles.body}> 
            <View style={styles.bodyContent}> 
                <Text>
                    date: {typeof json == 'object' ? 
                    <Text> 
                        {/* not showing up....... */}
                        {date} ..
                    </Text> 
                    : <></>}
                </Text>
                <Text> {/* style={{textAlign: 'center'}} */}
                    temperature: {typeof data !== 'undefined' ? data.temp : <></>}°F
                </Text>
                <Text>
                    feels like: {typeof data !== 'undefined' ? data.feels_like : <></>}°F
                </Text>
                <Text>
                    {typeof icon !== 'undefined' ?
                    <Text> 
                        {desc} :)
                    </Text>
                    : <></>} 
                </Text>
                <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${iconValue}@2x.png`}}/>
            </View>
        </View>
        </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" color="#000"/> : isLoaded()}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        // width: '90%',
        height: '75%',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    bodyContent: {
        textAlign: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        justifyContent: 'space-around',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerText: { 
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkgrey'
    },
    icon: {
        height: 50,
        width: 50,
        // backgroundColor: 'blue'
    },  
})
