import { Text, StyleSheet, View,ScrollView,Button } from 'react-native'
import React,{useState} from "react";

export default function scrollView(){
  const [items,setItems]=useState(["Opcion 1 ","Opcion 2","Opcion3"]);
  const agregarOpcion=()=>{
    const nuevaOpcion=`Opcion  ${items.length+1}`; //Al presionar el boton se suma 1 más
    setItems([...items,nuevaOpcion]);
                      //se agrega una nueva funcion
};
const borrarUltima=()=>{
  if (items.length>3){
    setItems(items.slice(0,items.length-1));
  }else{
    alert("Solo se borran las opciones que agregaste");
  }
};
return(
  <View style={styles.container}>
      <Text style={styles.title}>ScrollView</Text>
     <ScrollView 
     style={styles.scroll}
     contentContainerStyle={styles.content}
     //horizontal={true}
     showsVerticalScrollIndicator={true}
     perisistentScrollbar={true}
     scrollEnabled={true}
     >
      {items.map((item,index)=>( //crea la caja de cada elemnto y el texto a mostrar
        <View key={index} style={styles.box}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )
      
      )}
     </ScrollView>
     <View style={styles.buttonContainer}>
        <Button title="Agregar Opción" color="#4d8a71ff" onPress={agregarOpcion} />
        <View style={styles.space}/>
        <Button title="Borrar Opción" color="#d99d4fff" onPress={borrarUltima} />
      </View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EEf2ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#2c3e50',
  },
  scroll: {
    flex:1,
    marginRadius:10,
    backgroundColor:'#f9fafb',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  box: {
    backgroundColor: '#82b6ed',
    width:'90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity:0.2,
    shadowRadius: 5,
  },
  Text: {
    fontSize: 18,
    color: '#1f2937',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  space: {
    width:10,
  },
});