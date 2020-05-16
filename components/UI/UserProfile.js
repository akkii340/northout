

import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import Card from './Card'

const userProfile= (props)=> {
   return( <Card id={props.id}>
    <View style={styles.infoContainer}>
     <Image style={styles.image} source={{uri:props.image}}/>
       
       <View><Text>{props.email}</Text>
         <Text>{props.name[0]}{props.name[1]}</Text></View>
   </View>
 </Card>)
}

const styles = StyleSheet.create({
    card:{
        margin:10
    }, image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ccc',
        borderColor: '#C2185B',
        borderWidth: 1
      },
      infoContainer: {
        marginLeft: 15,
        flexDirection:'row',
      },
})
export default userProfile