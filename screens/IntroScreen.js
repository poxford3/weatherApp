import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         Image, 
         Linking, 
         ActivityIndicator,
         ImageBackground} from 'react-native'
import React, {useState, useEffect} from 'react'
import {SearchBar} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { cities } from '../assets/cities'
import { icons } from '../assets/icons'
import { Button } from 'react-native-elements/dist/buttons/Button'


export default function IntroScreen({navigation}) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [randomCity, setRandomCity] = useState("");
    const [icon, setIcon] = useState([]);

    var randCity,randLat,randLng = "";
    const api_key = "08ff95f3b0f97607b3b375dc9793f8b2";



    useEffect(() => {
        const generateRandomCity = () => {
            console.log("-----")
            randCityTotal = cities[Math.floor(Math.random()*cities.length)];
            randCityArray = randCityTotal.split(", ");
            randCity = randCityArray[0]+", "+randCityArray[1];
            setRandomCity(randCity);
            setLat(randCityArray[2]);
            setLng(randCityArray[3]);
            console.log(randCity)
            console.log(data.temp,'rand city button',isLoading);
        } 
        generateRandomCity()
    }, []);

    useEffect(() => {
        const getWeather = async () => {
            try {
                // console.log(lat," is lat and ",lng);
                const response = (await fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat='+lat+'&lon='+lng+'&appid='+api_key+''));
                const json = (await response.json());
                setData(json.main);
                setIcon(json.weather)
                // console.log(data.temp, 'get weather');
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
           }
        }
        getWeather()
    }, [lat,lng,randomCity])

    useEffect(() => {
        const getWeatherSymbol = () => {
            icon.map(x => console.log(x.id))
            // console.log(icon)
        }
        getWeatherSymbol()
    }, [])

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
        <ImageBackground
        source={'./assets/cloud_bg.png'} style={styles.container}>
        <SafeAreaView styles={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <Image 
                    source = {require('../assets/sunCloud.png')}
                    />
                    <Text style={{fontWeight:'bold', }}>clouds!</Text>
                </View>
                <View style={{paddingVertical:15}}></View>
                <SearchBar
                style={styles.searchBar}
                placeholder="Enter a city..."
                value={search}
                onChangeText={updateSearch}
                lightTheme
                 />
            </View> 
            <View style={styles.midSection}>
                <Text style={{fontSize: 30}}>{randomCity}</Text>
                {/* <Text>{lat}</Text>
                <Text>{lng}</Text> */}
                {typeof data !== 'undefined' ? <Text>temperature is {data.temp}°F</Text> : <View></View>}
                {typeof icon !== 'undefined' ? 
                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{icon.map(x => console.log(x.id))}</Text>
                    {/* <Ionicons name={icons.partlyCloudy} color={'black'} size={30}/> */}
                </View> 
                : 
                <View></View>}
                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name={icons.partlyCloudy} color={'black'} size={30}/>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>Created by: Parker :)</Text>
                <Text
                    style={{color:'blue', fontSize:8}}
                    onPress={() => Linking.openURL('https://simplemaps.com/data/us-cities')}
                >
                    [City list obtained from simplemaps.com]
                </Text>
            </View>
        </SafeAreaView>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems:'center',
        paddingBottom: 10,
    },  
    header: {
        padding: 10,
    },
    imageBG: {
        flex: 1,
    },
    midSection: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
    },
    searchBar: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
})