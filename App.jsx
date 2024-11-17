import React, { useState } from 'react';
import EXstyles from './style'

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

export default function App() {

  const[name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[display,setDisplay] = useState(false)

  const resetFormData =() =>{
    setDisplay(false)
    setName("")
    setEmail("")
    setPassword("")
  }


  return (
    <>
      
      

      <Text style={{fontSize:30}} >Handle Text Input</Text>
      <Text style={customStyle.textTitle} >Name is : <Text style={customStyle.textSpan}>{name}</Text></Text>
      <Text style={customStyle.textTitle} >Email is : <Text style={customStyle.textSpan}>{email}</Text></Text>

      <TextInput 
        style={customStyle.textArea}
        placeholder='Enter Your Name'
        onChangeText={(text) =>setName(text)}
        value={name}
      />

      <TextInput
      style={customStyle.textArea}
      placeholder='Enter Your Email'
      onChangeText={(email) => setEmail(email)}
      value={email}
      />

      <TextInput
      style={customStyle.textArea}
      placeholder='Enter Your Password'
      onChangeText={(pass) => setPassword(pass)}
      keyboardType='password'
      value={password}
      secureTextEntry={true}
      />

      {/* Button e sorasori style likha jay na  */}
      <View style={{marginBottom:10}}>
        <Button 
        color={'green'} 
        title='Print Detail'
        onPress={()=>setDisplay(true)}
        />
      </View>
      
      <Button title='clear Detail' onPress={resetFormData}/>

      {
        display && (
          <View>
            <Text style={{fontSize:19,fontWeight:'bold'}}> User Name is : {name}</Text>
            <Text style={{fontSize:19,fontWeight:'bold'}}> User Email is : {email}</Text>
            <Text style={{fontSize:19,fontWeight:'bold'}}> User Password is : {password}</Text>
          </View>
        )
      }
      

    </>
  );
}

const customStyle ={
  textArea:{
    fontSize:20,color:'black',borderWidth:2,borderColor:'blue',borderRadius:10,paddingTop:10,marginBottom:10,
  },
  textTitle:{
    fontSize:18,
    fontWeight:'bold'
  },
  textSpan:{
    color:'red'
  }
}


