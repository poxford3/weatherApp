import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         Image, 
         Linking, 
         ActivityIndicator,
         ImageBackground,
         TouchableOpacity,
         TextInput} from 'react-native'
import { AppLoading } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, {useState, useEffect} from 'react'
import {SearchBar} from 'react-native-elements'
import { cities } from '../assets/cities'


export default function IntroScreen({navigation}) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [randomCity, setRandomCity] = useState("");
    const [icon, setIcon] = useState([]);
    const [iconValue, setIconValue] = useState("");

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
            // console.log(randCity)
            // console.log(data.temp,'rand city button',isLoading);
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
            icon.map(x => console.log(x.icon))
            icon.map(x => setIconValue(x.icon))
            // console.log(`http://openweathermap.org/img/wn/${iconValue}@2x.png`)
        }
        getWeatherSymbol()
    }, [])

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
        <ImageBackground
        source={require('../assets/cloud_bg.png')} style={styles.container}>
        <SafeAreaView styles={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <Image 
                    source = {require('../assets/sunCloud.png')}
                    />
                    <Text style={{fontWeight:'bold', }}>clouds!</Text>
                </View>
                <View style={{paddingVertical:15}}></View>
                <View style={{flexDirection: 'row', paddingHorizontal: 10,}}>
                    <TextInput 
                        style={styles.searchBar}
                        placeholder='Enter a city...'
                        value={search}
                        onChangeText={updateSearch}
                        />
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', borderRadius: 5,}}
                            onPress={() => navigation.navigate("Weather", {
                                city: search
                            })}
                        >
                            <Ionicons name='md-send-sharp' size={30}/>
                        </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.midSection}>
                <Text style={{fontSize: 30, justifyContent: 'center', color: 'white'}}>{randomCity}</Text>
                {typeof data !== 'undefined' ? <Text style={styles.centerText}>{data.temp}°F</Text> : <View></View>}
                {typeof icon !== 'undefined' ? 
                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${iconValue}@2x.png`}}/>
                </View> 
                : 
                <View></View>}
            </View>
            <View style={styles.footer}>
                <Text style={styles.centerText}>Created by: Parker :)</Text>
                <Text
                    style={{color:'lightblue', fontSize:8}}
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
    centerText: {
        color: 'white',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // paddingHorizontal: 10
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems:'center',
        paddingBottom: 10,
    },  
    header: {
        padding: 10,
        // backgroundColor: '#fff',
    },
    icon: {
        height: 50,
        width: 50,
    },  
    imageBG: {
        flex: 1,
    },
    midSection: {
        flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.2)',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        padding: 40,
        // opacity: .9,
    },
    searchBar: {
        width: "90%",
        height: 60,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        fontSize: 26,
    },
})