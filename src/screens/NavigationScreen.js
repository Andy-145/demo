import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation Screen</Text>
      
      <TouchableOpacity onPress={() => navigation.push('Details')}>
        <Text style={styles.textLink}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity NavigationScreen
        onPress={() => navigation.popToTop()} // Go directly to HomeScreen with popToTop
      >
        <Text style={styles.textLink}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textLink}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', 
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333', 
    marginBottom: 30,
    fontFamily: 'Helvetica',
  },
  textLink: {
    fontSize: 18,
    color: '#0000FF',
    marginVertical: 10,
  },
});

export default NavigationScreen;