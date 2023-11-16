import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F4646', // Cor de fundo da tela
  },
  header: {
    backgroundColor: '#1DAD9C', // Cor de fundo do cabeçalho
    padding: 15,
    height: 150,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    marginTop: 32,
    marginLeft: 23,
  },
  scrollView: {
    marginVertical: 10,
  },
  cityCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cityDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  carouselSlide: {
    backgroundColor: '#1B2727', // Cor de fundo dos slides do carrossel
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  slideText: {
    color: '#E5E5E5', // Cor do texto dos slides
    fontFamily: 'Montserrat-SemiBold', // Fonte da descrição dos slides
    fontSize: 20,
  },
});
