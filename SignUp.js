import React from 'react'
import { useCallback } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import LogIn from './LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SocialIcon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


// SplashScreen.preventAutoHideAsync();

const SignUp = ({ navigation }) => {

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
  };

  // const navigation  = route.initialParams.navigation;
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <ScrollView>
    <View style={styles.container} onLayout={onLayoutRootView} >
      <Text style={[styles.main_heading]}>Register</Text>
      <Text style={styles.main_description}>Join with UniJobs, the largest undergraduate
         job seeking platform in Sri Lanka !!</Text>

      <View style={styles.formContainer}>


{/* Text Inputs  */}

      <TextInput
        leftIcon={require('../assets/icons/UserName.png')}
        style={styles.input}
        placeholder="UserName"
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <Text style={styles.subtext}>- Or continue with -</Text>
      
{/* Social Media Icons  */}

      <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
{/* GOOGLE */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    alert('google');
                  }}
                />
               
              </View>

 {/* FACEBOOK */}             
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('FaceBook');
                  }}
                />
               
              </View>

              
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('linkedin');
                  }}
                />
             
              </View>
              
              
            </View>

            
          </View>
          <TouchableOpacity style={styles.Btn}>
              <Text style={styles.BtnText}>Sign Up</Text>
            </TouchableOpacity>

        
       {/* Added a TouchableOpacity around the "Login" text */}
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.subtext}>
            Already have an account?
            <Text style={{ fontFamily: 'Inter-Black' }}> Login</Text>
          </Text>
        </TouchableOpacity>

      </View>   
      
         
    </View>
    </ScrollView>
    

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
    marginBottom:20
  },
  BtnText:{
    color:'white',
    margin:10,
    
  }
  
})

export default SignUp;