import React, {useState} from 'react';
import EXstyles from './style';
import UserAll from './UserAll';

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
            <UserAll item={item}/>
          )}
        />
      </View>
    </View>
  );
}

