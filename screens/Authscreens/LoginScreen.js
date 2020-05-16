import React from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const LoginScreen = (props)=>{
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
   const [user,setUser] = React.useState({email:'',password:''})
   const [error,setError] = React.useState('')

   const textChangeHandler=(val,id)=>{
       if(error !== null) setError(null)
        if(id === 'email')
        {
            setUser({...user,email:val})
        }
        if(id === 'pass')
        {
            setUser({...user,password:val})
        }
   }
   
   const submitHandler=()=>{
    const validuser = users.filter(item => 
        {if(item.email == user.email && item.password == user.password)
                return item
    })
    if(validuser.length>0)
            {dispatch({type:'Auth',payload:{email:user.email,pass:user.password}})}
            else{
                setError('Not a Valid user')
            }
   }

    return( 
    <View style={styles.screen}>
            <Card style={styles.authContainer}>
            {error !=null?<Text style={{color:'tomato'}}>{error}</Text>:null}
            <Text style={styles.label}>Email</Text>
          <TextInput
             style={styles.input}
             value={user.email}
            onChangeText={(text)=>textChangeHandler(text,'email')}
              />
               <Text style={styles.label}>Password</Text>
              <TextInput
               style={styles.input}
               value={user.password}
               onChangeText={(text)=>textChangeHandler(text,'pass')}
               secureTextEntry
              />
               <View style={styles.buttonContainer}>
                  <Button
                    title='Sign IN'
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


export default LoginScreen