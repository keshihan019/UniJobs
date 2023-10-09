import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image} from 'react-native';
import logo from '../constants/images'
import { useState, useEffect } from 'react';
import SignUp from './SignUp';

const SplashScreen = () => {
  const Stack = createStackNavigator();
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2000);
  }, []);

  if (isSplashScreenVisible) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
      <Image
          source={require('../assets/images/UniJobs_logo.png')}
          style={styles.logo}
          resizeMode='center'/>
        </View>
      </ScrollView>
    </SafeAreaView>  
    );
  } else{
    return (
      
        <Stack.Navigator>
          <Stack.Screen
            name=" "
            component={SignUp}
          />
        </Stack.Navigator>
      
    );
  }
}

const styles = StyleSheet.create({
  Text:{
    backgroundColor:'transparent',
    height:'100%',
    margin:10,
    padding:20,
    flex:1
  },
  logo:{
    width: 400,
    height: 350,
  },
  imgContainer:{
    // borderWidth:1,
    borderRadius:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    height:'100%',
    paddingTop:100,
    justifyContent: 'center',
  },
  container:{
    paddingTop:'28%',
    backgroundColor:'white',
    height:'100%'
  },
})

export default SplashScreen;