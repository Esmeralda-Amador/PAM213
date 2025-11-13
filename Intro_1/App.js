//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuScreen from './screens/MenuScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

//2.-Main: Zona de componentes
export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <MenuScreen />
    </GestureHandlerRootView>
  );
}