import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home'; // Remova a referência a 'index.js'
import CityDetails from './pages/CityDetails';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home} // Use 'Home' com a primeira letra maiúscula
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CityDetails"
        component={CityDetails}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
