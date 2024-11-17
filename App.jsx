import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App() {

  const[name,setName] = useState('kalam')

  const fruit = (name) =>{
    console.warn("Function Called",name)
  }

  const result = 'jiji'

  return (
    <>
      <Text style={{fontSize: 30,color:'red',backgroundColor:'green'}}>Hello Ismail</Text>
      <Text style={{fontSize:50}}>LIkes</Text>
      <Button title='hello' onPress={fruit} color={'red'} />
      {/* <Button title='name' onPress={()=>fruit('ismail')} /> */}
      <Text>{name}</Text>
      <Button title='click' onPress={()=>setName('dilam to change kore')} />
    </>
  );
}

