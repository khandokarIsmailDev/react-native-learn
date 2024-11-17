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
    },
    {
      id:5,
      name:"Duam"
    },
    {
      id:5,
      name:"Duam"
    },
    {
      id:5,
      name:"Duam"
    },
    {
      id:5,
      name:"Duam"
    },
    {
      id:5,
      name:"Duam"
    },
    {
      id:5,
      name:"Duam"
    }
  ]

  return (
    <View>
      <Text style={{fontSize:19,fontWeight:'bold',textAlign:'center',backgroundColor:'blue',color:'#fff'}} >All Users List</Text>
      <ScrollView>
      {
        users.map((item,index) => <Text style={customStyle.listItm}>{`${index+1}. ${item.name}`}</Text>)
      }
      </ScrollView>
    </View>
  );
}

const customStyle ={
  listItm:{
    fontWeight:'bold',
    fontSize:23,
    marginBottom:40
  }
}
