import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { useState, useEffect } from 'react';

export default function App() {
  const Stack = createStackNavigator();
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name='SplashScreen' 
          component={SplashScreen} />
        <Stack.Screen 
          name='SignUp'
          component={SignUp}
          // Pass navigation prop as initialParams
          // initialParams={{ navigation: navigation }}
        />
        <Stack.Screen 
          name='Login' 
          component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
