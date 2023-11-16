import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../style';

const citiesData = [
  { city: 'Rio de Janeiro', description: 'Praia de Copacabana' },
  { city: 'Florianópolis', description: 'Praia da Joaquina' },
  { city: 'Macaé', description: 'Praia dos Cavaleiros' },
  // Mais cidades...
];

const Home = () => {
  const navigation = useNavigation();

  const goToCityDetails = (city) => {
    navigation.navigate('CityDetails', { city });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá</Text>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        {citiesData.map((city, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => goToCityDetails(city)}
          >
            <View style={styles.carouselSlide}>
              <Text style={styles.slideText}>
                {city.city}
                {"\n"}
                {city.description}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <View style={styles.bottomMenu}>
        <Text style={styles.bottomMenuText}>Menu Inferior</Text>
      </View>
    </View>
  );
};

export default Home;



