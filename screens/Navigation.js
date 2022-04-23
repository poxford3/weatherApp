import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import WeatherScreen from './WeatherScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer
        style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
                initialRouteName="Intro">
                    <Stack.Screen name="Intro" component={IntroScreen} />
                    <Stack.Screen name="Weather" component={WeatherScreen} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });