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
      <Text style={{fontSize:19,fontWeight:'bold',textAlign:'center',backgroundColor:'blue',color:'#fff'}} >Using Grid List In Map</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
        {
          users.map((item) => <Text style={customStyles.item}>{item.name}</Text>)
        }
        
        
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  item:{
    fontSize:19,
    fontWeight:'bold',
    backgroundColor:'red',
    color:'white',
    padding:5,
    borderRadius:10,
    width:120,
    height:120,
    textAlignVertical:'center',
    textAlign:'center',
    margin:5
  }
})