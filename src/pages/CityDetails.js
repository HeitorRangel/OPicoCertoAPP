import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

const CityDetails = ({ route }) => {
  const { city } = route.params || {}; // Certifique-se de inicializar com um objeto vazio

  if (!city) {
    // Trate o caso em que city é nulo ou indefinido
    return (
      <View style={styles.container}>
        <Text>Nenhuma cidade encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.carouselSlide}>
        <Text style={styles.slideText}>
          {city.city}
          {"\n"}
          {city.description}
        </Text>
      </View>
    </View>
  );
};

export default CityDetails;

