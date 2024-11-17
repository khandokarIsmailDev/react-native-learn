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
  const users = [
    {
      id: 1,
      name: 'Sam',
    },
    {
      id: 2,
      name: 'Kam',
    },
    {
      id: 3,
      name: 'Pem',
    },
    {
      id: 4,
      name: 'Cham',
    },
    {
      id: 5,
      name: 'Duam',
    },
    {
      id: 6,
      name: 'Duam',
    },
    {
      id: 7,
      name: 'Duam',
    },
    {
      id: 8,
      name: 'Duam',
    },
    {
      id: 15,
      name: 'Duam',
    },
    {
      id: 25,
      name: 'Duam',
    },
    {
      id: 35,
      name: 'Duam',
    },
  ];

  return (
    <View>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'blue',
          color: '#fff',
        }}>
        Using Grid List In Map
      </Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <View style={customStyles.box}>
              <Text style={customStyles.item}>{item.id}</Text>
              <Text style={customStyles.item}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    fontWeight: 'bold',
    flex: 1,
    margin: 2,
    paddingLeft:10
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,

  },
});
