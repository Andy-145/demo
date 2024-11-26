import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useColorMode } from 'native-base';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colorMode } = useColorMode();

  const handleLogin = () => {
    navigation.replace('Main');
  };

  const handleForgotPassword = () => {
    alert('Recuperar contraseña no implementado aún');
  };

  const backgroundColor = colorMode === 'light' ? '#e6f2ff' : '#1a202c';
  const textColor = colorMode === 'light' ? '#3a5a9f' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.appName}>VECIAPP</Text>
      <Text style={[styles.title, { color: textColor }]}>Iniciar Sesión</Text>
      
      <TextInput
        style={[styles.input]}
        placeholder="Usuario"
        placeholderTextColor="#6a8caf"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={[styles.input]}
        placeholder="Contraseña"
        placeholderTextColor="#6a8caf"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>   

      <Pressable onPress={() => navigation.navigate('Registro')}>
        <Text color="indigo.500"
        fontWeight="medium"
        fontSize="sm">
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6F0FA',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#4a4a4a',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A90E2',
    marginTop: 20,
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#888',
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  registerLink: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;








