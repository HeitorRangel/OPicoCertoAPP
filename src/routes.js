import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import CityDetails from './pages/CityDetails';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveBackgroundColor: '#1DAD9C',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#1B2727',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#E5E5E5',
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 8,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="CityDetails"
        component={CityDetails}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="map" size={size} color={color} />
            ) : (
              <Ionicons name="map-outline" size={size} color={color} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
}
