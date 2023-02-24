import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, DetailsCEP } from "../../src/screens"

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false}} initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="DetailsCEP" component={DetailsCEP} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

