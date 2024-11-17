import React, {useState} from 'react';
import EXstyles from './style';

import {
  Button,
  FlatList,
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

 
  const users =[
    {
      id:1,
      name:"Sam"
    },
    {
      id:2,
      name:"Kam"
    },
    {
      id:3,
      name:"Pem"
    },
    {
      id:4,
      name:"Cham"
    },
    {
      id:5,
      name:"Duam"
    }
  ]

  return (
    <View>
      <Text style={{fontSize:19,fontWeight:'bold'}} >All Users List</Text>
      <FlatList
        data={users}
        renderItem={({item}) =><Text style={{fontSize:20}}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}
