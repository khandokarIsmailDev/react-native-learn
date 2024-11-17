
import { StyleSheet,View,Text } from "react-native";


export default function UserAll ({item}){
    return (
      <View style={customStyles.box}>
                <Text style={customStyles.item}>{item.id}</Text>
                <Text style={customStyles.item}>{item.name}</Text>
              </View>
    )
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
  