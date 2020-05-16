import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';




const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const RegisterScreen =(props)=>{

    const [error, setError] = useState();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: '',
          confirmpassword:''
        },
        inputValidities: {
          email: false,
          password: false,
          confirmpassword:false
        },
        formIsValid: false
      });
      const dispatch = useDispatch();

      useEffect(() => {
        if (error) {
          Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
      }, [error]);

      const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );
      const authHandler = () => {
        console.log(formState.inputValues)
        if(formState.inputValues.password !== formState.inputValues.confirmpassword){
            setError('Confirm password and password not match');
        }
        else{
            let action;
            action = {
                type:'ADD_User',
                payload:{
                    email:formState.inputValues.email,
                    password:formState.inputValues.password
                }
            }
            setError(null);
            dispatch(action);
            props.navigation.navigate('Login')
        }
       };

    return(<KeyboardAvoidingView
        behavior="padding"
        style={styles.screen}
      >
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={8}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
               <Input
                id="confirmpassword"
                label="confirm password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={8}
                autoCapitalize="none"
                errorText="Please re-enter password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                  <Button
                    title='Sign Up'
                    color={Colors.primary}
                    onPress={authHandler}
                  />
              </View>
            </ScrollView>
          </Card>
      </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    authContainer: {
      width: '80%',
      maxWidth: 400,
      maxHeight: 400,
      padding: 20
    },
    buttonContainer: {
      marginTop: 10
    }
  });

export default RegisterScreen