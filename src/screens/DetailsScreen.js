import React from 'react';
import { View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '600', color: '#333', fontFamily: 'Helvetica', marginBottom: 30}}>Details Screen</Text>
      <Button
        title="Go to Navigation"
        onPress={() => navigation.navigate('Navigation')}
        
      />
    </View>
  );
};

export default DetailsScreen;