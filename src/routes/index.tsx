import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, DetailsCEP, FavoriteCEP, Welcome } from "../../src/screens"

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false}} initialRouteName="Welcome">
          <Screen name="Welcome" component={Welcome} />
          <Screen name="Home" component={Home} />
          <Screen name="DetailsCEP" component={DetailsCEP} />
          <Screen name="FavoriteCEP" component={FavoriteCEP} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

