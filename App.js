import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base';
import theme from './theme';
import ToggleDarkMode from './ToggleDarkMode';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import NavigationScreen from './src/screens/NavigationScreen';
import LoginScreen from './src/screens/LoginScreen';
import Registro from './src/screens/Registro';
import ConfigScreen from './src/screens/ConfigScreen';
import Competences from './src/screens/Competences';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Details') iconName = 'list-outline';
          else if (route.name === 'Navigation') iconName = 'happy-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Config') iconName = 'settings-outline';
          else if (route.name === 'Competences') iconName = 'document-text-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    > 
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Navigation" component={NavigationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
      <Tab.Screen name="Competences" component={Competences} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="Config" component={ConfigScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToggleDarkMode />
    </NativeBaseProvider>
  );
}

export default App;
