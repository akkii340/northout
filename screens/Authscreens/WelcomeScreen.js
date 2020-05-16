import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../../components/UI/Button'

const WelcomeScreen =(props)=>{

    return(<View style={styles.container}>
          <Button onPress={()=>{props.navigation.navigate('Register')}}><Text>Register</Text></Button>
          <Button onPress={()=>{props.navigation.navigate('Login')}}><Text>Login</Text></Button>
    </View>)
}

const styles = StyleSheet.create({
    container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
    }
})
export default WelcomeScreen