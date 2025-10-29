import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInput from './TextInput'
import ImageBackgroung from './ImageBackgroung'
import ScrollView from './ScrollView'
import ActivityIndicator from './ActivityIndicator'
import FlatList from './FlatList'
import Modal from './Modal'
import ButtomSheet from './ButtomSheet'
import Repaso1 from './Repaso1'

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu'); /* desestructuración / / declaración del estado e inicialización del menu */

    switch (screen) {
      case 'contador':
        return <ContadorScreen/>;
      case 'botones':
        return <BotonesScreen />;
      case 'textInput':
        return <TextInput/>;
      case 'imageBackgroung':
        return <ImageBackgroung/>;
      case 'scrollView':
        return <ScrollView/>;
      case 'activityIndicator':
        return <ActivityIndicator/>;
      case 'flatList':
        return <FlatList/>;
      case 'modal':
        return <Modal/>;
      case 'buttomSheet':
        return <ButtomSheet/>;
      case 'repaso1':
        return <Repaso1/>;
      case 'menu':
            default:
                return (
                    <View  style={styles.container}>
                        <Text style={styles.texto} > Menú de Prácticas</Text>
                        <View style={styles.botonesContainer}>
                        <Button title='Pract: Contador' onPress={()=>setScreen('contador')} color ='#ff26a8ff'  />{/* el valor que esté dentro de setScreen debe ser igual al del switch */}
                        <Button title='Pract: Buttons' onPress={()=>setScreen('botones')} color ='#ff26a8ff' />
                        <Button title='Pract: TextInput' onPress={()=>setScreen('textInput')}color ='#ff26a8ff' />
                        <Button title='Pract: ImageBackgroung' onPress={()=>setScreen('imageBackgroung')}color ='#ff26a8ff'/>
                        <Button title='Pract: ScrollView' onPress={()=>setScreen('scrollView')}color ='#ff26a8ff'/>
                        <Button title='Pract: Activity' onPress={()=>setScreen('activityIndicator')}color ='#ff26a8ff'/>
                        <Button title='Pract: FlatList' onPress={()=>setScreen('flatList')}color ='#ff26a8ff'/>
                        <Button title='Pract: Modal' onPress={()=>setScreen('modal')}color ='#ff26a8ff'/>
                        <Button title='Pract: Buttom Sheet' onPress={()=>setScreen('buttomSheet')}color ='#ff26a8ff'/>
                        <Button title='Pract: repaso 1' onPress={()=>setScreen('repaso1')}color ='#ff26a8ff'/>
                         </View> 
                    </View>
                )
    }
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc4d6ff',
    alignItems: 'center', //posicionamiento sobre x
    justifyContent: 'center', //posicionamiento sobre y- 
    gap: 5.5,
    
  },
  texto:{
     color: '#ffffffff',
     fontSize: 45,
     fontFamily: 'Times New Roman',
     fontWeight:'bold',
     fontStyle: 'italic',
     //textDecorationLine: 'line-through',
  },
   botonesContainer:{
    marginTop :20,
    //flexDirection:'row',
    alignItems: 'center', 
    //justifyContent: 'center',
    gap:15,
  },
  });
