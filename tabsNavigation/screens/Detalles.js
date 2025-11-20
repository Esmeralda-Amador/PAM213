import React,{UseState} from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';

export default function Detalles(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del usuario</Text>
             <Text style={styles.title}> Usando stackNavegation </Text>
              </View>
    )

}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'blue',
   textAlign : 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});