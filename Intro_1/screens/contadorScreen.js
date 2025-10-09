//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {

  const [contador, setContador]=useState(0);/* desestructuración */

  return (

    <View style={styles.container}>

      <Text style={styles.texto} > Contador: </Text>
      <Text style={styles.texto2} >{contador} </Text>{/*con shift+alt+a te dice cómo son los comentarios  */}

      <View style={styles.botonesContainer}>
      <Button color = "green" title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button color= "red"    title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color="blue"    title='Reiniciar' onPress={()=>setContador(0)}/>
      </View> 
      <StatusBar style="auto" />

    </View>
  );
}

//3. Styles: Zona estética y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc4d6ff',
    alignItems: 'center', //posicionamiento sobre x
    justifyContent: 'center', //posicionamiento sobre y-
  },
    texto:{
     color: '#ffffffff',
     fontSize: '50',
     fontFamily: 'Times New Roman',
     fontWeight:'bold',
     fontStyle: 'italic',
     //textDecorationLine: 'line-through',

  },
  texto2:{
     color: '#ffffffff',
     fontSize: '55',
     fontFamily: 'Times New Roman',
     fontWeight:'400',
     fontStyle: 'normal',
     textDecorationLine: 'underline',

  },
  botonesContainer:{
    marginTop :'20',
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap:15,
  },

});
