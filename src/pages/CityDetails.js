import React from 'react';
import { View, Text } from 'react-native';

const CityDetails = ({ route }) => {
  const { city } = route.params; // Obtém os parâmetros passados na navegação

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{city.city}</Text>
      <Text>{city.description}</Text>
    </View>
  );
};

export default CityDetails;