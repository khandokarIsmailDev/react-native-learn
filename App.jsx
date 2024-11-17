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


  return (
    <>
      <Text style={{fontSize: 30,color:'red',backgroundColor:'green'}}>Hello Ismail</Text>
      <Text style={{fontSize:50}}>LIkes</Text>
      
      <Text>{name}</Text>
      <Button title='click' onPress={()=>setName('dilam to change kore')} />
      <Text style={EXstyles.textBox} >Custom Style Use</Text>
      <Text style={EXstyles.textBox} >Custom Style Use</Text>
      <Text style={EXstyles.textBox} >Custom Style Use</Text>

      <Text style={{fontSize:30}} >Handle Text Input</Text>
      <Text style={customStyle.textTitle} >Name is : <Text style={customStyle.textSpan}>{name}</Text></Text>

      <TextInput 
        style={customStyle.textArea}
        placeholder='Enter Your Name'
        onChangeText={(text) =>setName(text)}
      />

    </>
  );
}

const customStyle ={
  textArea:{
    fontSize:20,color:'red',borderWidth:2,borderColor:'blue',borderRadius:10,paddingTop:10
  },
  textTitle:{
    fontSize:18,
    fontWeight:'bold'
  },
  textSpan:{
    color:'red'
  }
}


