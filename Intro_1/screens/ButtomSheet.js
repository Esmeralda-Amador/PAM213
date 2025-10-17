import { Text, StyleSheet, View } from 'react-native'

export default function ButtomSheet() {
    return (
      <View>
        <Text> Prox.... </Text>
      </View>
    )
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
  }
})