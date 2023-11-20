import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    // Após um certo tempo determinado, ou ao finalizar algum carregamento necessário
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000); // Navegar para "Home" após 3 segundos (3000 milissegundos)
  }, [navigation]);
//incluir navegação para a pagina de cada cidade
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

