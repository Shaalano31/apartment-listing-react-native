import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomePage/HomePage';
import ApartmentScreen from './src/screens/DetailsPage/DetailsPage';
import AddApartment from './src/screens/AddApartment/AddApartment';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="ApartmentDetails"
          component={ApartmentScreen}
          options={{title: 'Apartment Details'}}
        />
        <Stack.Screen
          name="AddApartment"
          component={AddApartment}
          options={{title: 'Add Apartment'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
