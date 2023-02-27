import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppRoute from "./src/routes"
import GlobalProvider from './src/contexts/GlobalProvider';

export default function App() {
  return (
    <>
      <GlobalProvider>
        <StatusBar style="light" />
        <AppRoute />
      </GlobalProvider>
    </>
  );
}

