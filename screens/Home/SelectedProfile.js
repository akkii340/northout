import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image,ActivityIndicator,Dimensions} from 'react-native'

import axios from 'axios'

const SelectedScreen = props =>{

    const [user,setUserData]=useState({
        email:'',
        first_name:'',
        last_name:'',
        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
           })
 const [isLoading,setisLoading] = useState(false)

    useEffect(()=>{
       
        setisLoading(true)
        const id= props.naviagtion.getParam('id')
        axios.get(`https://reqres.in/api/users/${id}`).then(response => {
            setisLoading(false)
            const data =response.data.data
        setUserData({
            email:data.email,
            first_name:data.first_name,
            last_name:data.last_name,
            avatar:data.avatar,
        })})
        .catch(err =>console.log(err))
    },[])

    
if(isLoading)
    return(<ActivityIndicator size="large" color="green"/>)
    else   return (
      <View style={styles.fill}>
          
          <Image
       style={{width:Dimensions.get('window').width,height:'70%'}}
    source={{uri:user.avatar}}
      />
        <View style={styles.scrollViewContent}>

          <View style={styles.infoContainer}> 
         
          <Text style={styles.text}>{user.email}</Text>
          </View>
        <View style={styles.infoContainer}> 
          
          <Text style={styles.text}>{user.first_name} {user.last_name}</Text>
          </View>

        </View>
       
   
  
   <View>

   </View>
  
      </View>
    );
    
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
    },
    fill: {
        flex: 1,
      },
    
      scrollViewContent: {
        marginTop: 10,
      },
      text:{
        fontSize:20,
        color:'#808080',
        fontStyle:'italic',
        marginBottom:5,
        marginLeft:10
      },
    
      infoContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10
      }

})
export default SelectedScreen