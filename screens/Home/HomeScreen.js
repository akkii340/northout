import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet,ScrollView,FlatList, ActivityIndicator,TouchableOpacity} from 'react-native'
import axios from 'axios'
import UserProfile from '../../components/UI/UserProfile'

const HomeScreen =(props)=>{
  const [data,setData] = useState(new Array())
  const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
            axios.get('https://reqres.in/api/users').
            then(response =>{setIsLoading(false)
                setData(response.data.data)}
                )
    },[])

if(isLoading)
    return(<ActivityIndicator size="large" color="green"/>)
    else 
      return(
    <View style={styles.screen}>
     {data.length>0?<FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>props.navigation.navigate('select',{id:item.id})}>
          <UserProfile
            id={item.id}
            email={item.email}
            image={item.avatar}
            name={[item.first_name,item.last_name]}
          />
        </TouchableOpacity>)}
        keyExtractor={item => item.id.toString()}
      />
      :null}
    </View>)
}

const styles = StyleSheet.create({
    screen:{flex:1},
    
  
}) 

export default HomeScreen