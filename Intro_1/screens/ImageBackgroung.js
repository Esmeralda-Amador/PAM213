import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity,StatusBar} from 'react-native';

// Las constantes de imágenes locales (require) ya están definidas.
// ASUME que esta ruta es correcta respecto a la ubicación de App.js.
const SPLASH_IMAGE = require('../assets/Recursos/Recurso1.jpg'); 
const MAIN_IMAGE = require('../assets/Recursos/image.png'); 
const LOGO_IMAGE = require('../assets/Recursos/Logo.jpg');

export default function imageBackgroung() {
  // 1. STATE: Controla si mostramos el SplashScreen (true) o la App principal (false)
  const [isLoading, setIsLoading] = useState(true);//se inicia la pantalla de carga
  

  // 2. EFECTO: Simula una tarea de inicialización de la app
  useEffect(() => { //iniciamos la acción que permanera activa hasta que el efecto termine
    //declaramos el useEffect (Hook que permite realizar una tarea con efecto secundario, en este caso un temporizador)
    const timer = setTimeout(() => {//creamos la variable timer y su función setTimeot
      setIsLoading(false); //finaliza la carga
    }, 3000);
    return () => clearTimeout(timer);//cancelara el temporizador cuando no sea necesario
    //se ejecuta 
  }, []);

  // 3. RENDERIZADO CONDICIONAL: SPLASH SCREEN
  if (isLoading) {
    return (
      <ImageBackground
        // ✅ CORRECCIÓN: Se usa SPLASH_IMAGE directamente (sin { uri: ... })
        source={SPLASH_IMAGE} 
        resizeMode="cover"
        imageStyle={styles.splashImageStyle} 
        //imageStyle: es la propiedad que indica los estilos q apliquemos deben de ir en la imagen
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          {/* ✅ CORRECCIÓN: Se usa LOGO_IMAGE directamente (sin { uri: ... }) */}
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi App</Text>
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  // 4. RENDERIZADO CONDICIONAL: PANTALLA PRINCIPAL
  return (
    <ImageBackground
      // ✅ CORRECCIÓN: Se usa MAIN_IMAGE directamente (sin { uri: ... })
      source={MAIN_IMAGE}//Indica cual es el archivo que debe de mostar 
      resizeMode="cover" //Determina como se ajusta la imagen
      imageStyle={styles.mainImageStyle}//imageStyle: es la propiedad que indica los estilos q apliquemos deben de ir en la imagen
      //CATALOGO STYLES Y LAS REGLAS DEL ESTILO .MAIN...
      //Estiliza la foto
      style={styles.mainBackground}
      //Estiliza el marco que contiene la foto

      //1.definir los elemtos visibles e interactivos que se superponen a la imagen
      //barStyle: define el  color claro o oscuro de el texto e iconos de la barra
      //backgroundColor	"transparent"	Define que el color de fondo de la barra de estado es transparente.
      //translucent permite que el contenido suba detrás de la barra.

     /* 2.Es el contenido literal que el usuario verá en la pantalla.
     styles.mainOverlay:darle estructura y un efecto visual a la capa que contiene el texto y los botones, separándola del fondo.
     Define la función que se ejecuta cuando el usuario toca el botón.
     */
    >

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>¡Bienvenido a la App!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Botón presionado')}
        >
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

// 5. ESTILOS (Sin cambios)
const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },

  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)', 
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },

  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)', 
    padding: 20,
    borderRadius: 12,
  }, 
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});