import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function DetailsCEP() {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(
      function(){
        navigate('Home')
      },
      3000
    )
  }, [])
  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/search-house.png")}/>
      <Text style={styles.text}>Bem vindo!</Text>
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
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 15,
  },
});