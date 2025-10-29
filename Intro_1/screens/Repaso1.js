import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,TextInput,Switch,TouchableOpacity,StatusBar,Platform,Alert,} from 'react-native';

const SPLASH_IMAGE = require('../assets/Recursos/Recurso3.jpg');
const MAIN_IMAGE = require('../assets/Recursos/Recursos2.jpg');
const LOGO_IMAGE = require('../assets/Recursos/Recurso4.jpg');

export default function Repaso1() {
  const [isLoading, setIsLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  
  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
        alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const enviarDatos = () => {
    console.log('Presionaste Enviar');

    if (nombre.trim() === '' || correo.trim() === '') {
      mostrarAlerta('Error', 'Por favor completa todos los campos.');
      return;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      mostrarAlerta(
        'Correo no válido',
        'Ingresa un correo electrónico válido (ejemplo: usuario@gRmail.com)'
      );
      return;
    }

    if (!aceptaTerminos) {
      mostrarAlerta(
        'Términos no aceptados',
        'Debes aceptar los términos y condiciones.'
      );
      return;
    }

    mostrarAlerta('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`);

  };

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="cover"
        imageStyle={styles.splashImageStyle}
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi App</Text>
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MAIN_IMAGE}
      resizeMode="cover"
      imageStyle={styles.mainImageStyle}
      style={styles.mainBackground}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>¡Bienvenido!</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
        </View>

        <TouchableOpacity style={styles.button} onPress={enviarDatos}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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
    width: '80%',
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  switchText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});
