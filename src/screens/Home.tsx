import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import FormCEP from '../components/FormCEP'
import useGlobalContext from '../contexts/useContext';

export default function Home() {
  const { state: { loading } } = useGlobalContext()

  return (
    <View style={styles.container}>
      {
        loading
          ? <Text style={styles.text}>Carregando</Text>
          : (
            <>
              <Image style={styles.logo} source={require("../../assets/search-house.png")}/>
              <FormCEP />
            </>
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16191d',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  logo: {
    width: 125,
    height: 125,
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  },
});