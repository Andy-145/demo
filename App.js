
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen'; 
import NavegationScreen from './src/screens/NavigationScreen'; 

const Stack = createNativeStackNavigator();

function App() { // New screen "Navigation"
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Navigation" component={NavegationScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

