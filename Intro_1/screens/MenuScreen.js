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

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu'); /* desestructuración / / declaración del estado e inicialización del menu */

    switch (screen) {
      case 'contador':
        return <ContadorScreen/>;
      case 'botones':
        return <BotonesScreen />;
      case 'text Input':
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
      case 'bottom Sheet':
        return <ButtomSheet/>;
      case 'menu':
            default:
                return (
                    <View >
                        <Text> Menú de Prácticas</Text>
                        <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>{/* el valor que esté dentro de setScreen debe ser igual al del switch */}
                        <Button title='Pract: Buttons' onPress={()=>setScreen('botones')}/>
                        <Button title='Pract: TextInput' onPress={()=>setScreen('textInput')}/>
                        <Button title='Pract: ImageBackgroung' onPress={()=>setScreen('imageBackgroung')}/>
                        <Button title='Pract: ScrollView' onPress={()=>setScreen('scrollView')}/>
                        <Button title='Pract: Activity' onPress={()=>setScreen('activityIndicator')}/>
                        <Button title='Pract: FlatList' onPress={()=>setScreen('flatList')}/>
                        <Button title='Pract: Modal' onPress={()=>setScreen('modal')}/>
                        <Button title='Pract: Buttom Sheet' onPress={()=>setScreen('buttomSheet')}/>
                    </View>
                )
    }
  }
