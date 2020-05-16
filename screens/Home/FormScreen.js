import React from 'react'
import {View,Text,StyleSheet,TextInput,Button,Alert} from 'react-native'
import Axios from 'axios'
import Card from '../../components/UI/Card'
import Colors from '../../constants/Colors'
const FormScreen =()=>{
    const [user,setUser] = React.useState({name:'',job:''})
    const [error,setError] = React.useState(null)
   const textChangeHandler=(val,id)=>{
       if(error) setError(null)

        if(id === 'name')
        {
            setUser({...user,name:val})
        }
        if(id === 'job')
        {
            setUser({...user,job:val})
        }
   }

   const submitHandler=()=>{
        if(user.name.length>0 && user.job.length>0)
        {
            Axios.post('https://reqres.in/api/users',{name:user.name,job:user.job}).then(response =>console.log(reponse)).
            catch(error => Alert.Alert('Warning','something went wrong'+error))
        }
        else{
            setError('All fields are mandatory..')
        }
   }

    return( <View style={styles.screen}>
        <Card style={styles.authContainer}>
        {error !=null? <Text style={{color:'tomato'}}>{error}</Text>:null}
        <Text style={styles.label}>Name</Text>
      <TextInput
         style={styles.input}
         value={user.email}
        onChangeText={(text)=>textChangeHandler(text,'name')}
          />
           <Text style={styles.label}>Job</Text>
          <TextInput
           style={styles.input}
           value={user.password}
           onChangeText={(text)=>textChangeHandler(text,'job')}
           secureTextEntry
          />
           <View style={styles.buttonContainer}>
              <Button
                title='Submit'
                color={Colors.primary}
                onPress={submitHandler}
              />
          </View>
    </Card>
</View>)
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    authContainer: {
      width: '80%',
      maxWidth: 400,
      maxHeight: 400,
      padding: 20
    },
    buttonContainer: {
      marginTop: 10
    }, label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
      },
      input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
      },
  });


export default FormScreen