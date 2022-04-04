import { View, Text, StyleSheet, SafeAreaView, Image, Linking, } from 'react-native'
import React, {useState} from 'react'
import {SearchBar} from 'react-native-elements'
import {cities} from '../assets/cities'
import { Button } from 'react-native-elements/dist/buttons/Button'


export default function IntroScreen({navigation}) {
    
    const [randomCity, setRandomCity] = useState("")
    var randCity = "";

    const generateRandomCity = () => {
        console.log("-----")
        console.log(cities.length)
        console.log(Math.floor(Math.random()*cities.length))
        randCity = cities[Math.floor(Math.random()*cities.length)]
        setRandomCity(randCity)
        console.log(randCity)
    }

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
            <View style={{height:'50%'}}>
            <Text> random city is {randCity}</Text>
            <Text>{search}</Text>
            {/* <Text>placeholder</Text> */}
            <Button style={{width:30, height: 30, backgroundColor: '#000', left: 10}} onPress={generateRandomCity}/>
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
        alignItems: 'center'
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems:'center'
    },  
    header: {
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