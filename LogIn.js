import React from 'react'
import { useCallback } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Button, Image} from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// SplashScreen.preventAutoHideAsync();

const LogIn = () => {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf')
  });

  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
  };

  
  


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    
    <View style={styles.container} onLayout={onLayoutRootView} >
      <Text style={[styles.main_heading]}>Login</Text>
      <Text style={styles.main_description}>Join with UniJobs, the largest undergraduate
         job seeking platform in Sri Lanka !!</Text>

      <View style={styles.formContainer}>


{/* Text Inputs  */}

      
      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={setUserName}
        value={UserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

          <TouchableOpacity style={styles.Btn}>
              <Text style={styles.BtnText}>Login</Text>
            </TouchableOpacity>
            
      <Image
          source={require('../assets/images/login.png')}
          style={styles.img}
          resizeMode='center'/>
        
      </View>

      
    </View>
    
    

  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex:1,
    paddingTop:'2%',
    backgroundColor:'white',
    height:'100%',
    padding:'4%',
  },
  img:{
    width: 800,
    height: 350,
    resizeMode:"contain"
  },
  input:{
    height: 60,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    borderColor:'#019F99',
    marginBottom: 35,
    paddingHorizontal: 16,
    alignItems:'center'
  },
  formContainer:{
    paddingBottom:'8%',
    borderRadius:10,
    borderColor:'#019F99',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_heading:{
    marginTop:50,
    fontSize: 40,
    margin:10,
    fontFamily:'DMSans-Bold'
  },
  main_description:{
    margin:10,
    fontSize: 25,
    paddingBottom:25
  },
  subtext:{
    color:"grey",
    fontFamily:'Inter-Medium',
    paddingBottom:20,
  },
  Btn:{
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#019F99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  BtnText:{
    color:'white',
    margin:10,
    
  }
  
})

export default LogIn;