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

 

  return (
    <View>
      <Text style={{fontSize:19,fontWeight:'bold',textAlign:'center',backgroundColor:'blue',color:'#fff'}} >Using Grid List</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={customStyles.item}>Sam</Text>
        <Text style={customStyles.item}>Sam</Text>
        <Text style={customStyles.item}>Sam</Text>
        <Text style={customStyles.item}>Sam</Text>
        <Text style={customStyles.item}>Sam</Text>
        <Text style={customStyles.item}>Sam</Text>
        
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