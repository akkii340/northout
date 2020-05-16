import React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'

const Button =(props) =>{
    
        return(<TouchableOpacity style={styles.btnContainer} {...props}>
            {props.children}
        </TouchableOpacity>)
    
}

const styles = StyleSheet.create({
    btnContainer:{
        marginTop:20,
        height:40,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f6b140',
        borderRadius:5

    }
})

export default Button