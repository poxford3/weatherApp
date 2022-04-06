import { View, Text, StyleSheet, SafeAreaView, Image, Linking, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import {SearchBar} from 'react-native-elements'
import {cities} from '../assets/cities'
import { Button } from 'react-native-elements/dist/buttons/Button'


export default function IntroScreen({navigation}) {
    
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [randomCity, setRandomCity] = useState("")

    var randCity,randLat,randLng = "";
    const api_key = "08ff95f3b0f97607b3b375dc9793f8b2";



    useEffect(() => {
        const generateRandomCity = () => {
            console.log("-----")
            randCityTotal = cities[Math.floor(Math.random()*cities.length)];
            randCityArray = randCityTotal.split(", ");
            console.log(randCityArray)
            randCity = randCityArray[0]+", "+randCityArray[1];
            setRandomCity(randCity);
            // randLat = randCityArray[2];
            setLat(randCityArray[2]);
            // randLng = randCityArray[3];
            setLng(randCityArray[3]);
            console.log(randCity)
            if (lat != randCityArray[2]){
                setLat(randCityArray[2]);
                console.log(lat,"the")
            } else {
            console.log(lat+", "+randCityArray[2]);
            console.log(lng+", "+randCityArray[3]);
            console.log(data.temp,' rand city button');
            }

        } 
        const getWeather = async () => {
            try {
                console.log(lat," is lat and ",lng);
                const response = (await fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat='+lat+'&lon='+lng+'&appid='+api_key+''));
                const json = (await response.json());
                setData(json.main);
                console.log(data.temp, 'get weather');
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
           }
        }
        generateRandomCity()
        getWeather()
    }, []);




    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
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
                <Text>{"" && data.temp}</Text>
                {/* <Text>placeholder</Text> */}
                {/* <Button style={{width:30, height: 30, backgroundColor: '#000', left: 10}} onPress={generateRandomCity}/> */}
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
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems:'center'
    },  
    header: {
        padding: 10,
    },
    midSection: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
    },
    searchBar: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
})