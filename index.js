import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
const Home = () => {
const Router = useRouter(); //router hook

// SafeAreaView is a component provided by React Native that helps you ensure 
// that the content of your app is displayed within safe and usable areas of the 
// device's screen, especially in devices with notches, rounded corners, or other 
// irregular screen shapes. It is particularly useful to prevent your app's content 
// from being obscured by these hardware features.

     return(
        
         <SafeAreaView> 
            <Text>home</Text>
         </SafeAreaView>
     )
}

export default Home;