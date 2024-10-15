import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.textButton}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Navigation')}>
        <Text style={styles.textButton}>Go to Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333', 
    marginBottom: 30,
    fontFamily: 'Helvetica',
  },
  textButton: {
    fontSize: 18,
    color: 'black', 
    marginBottom: 20, 
  },
});

export default HomeScreen;