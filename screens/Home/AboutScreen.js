import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card'
const AboutScreen =()=>{
    const user = useSelector(state => state.users.isAuth);
    console.log(user)
    return(<View style={styles.container}>
        <Card style={styles.card}>
            <Text style={{color:'green'}}>User is Authenticated {user.auth}</Text>
            <Text style={styles.label}>E-mail:</Text><Text>{user.email}</Text>
            <Text style={styles.label}>Password:</Text><Text>{user.pass}</Text>
        </Card>
    </View>)
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },card:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
  label: {
            fontFamily: 'open-sans-bold',
          },
 
})
export default AboutScreen