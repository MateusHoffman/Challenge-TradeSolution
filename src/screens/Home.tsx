import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FormCEP from '../components/FormCEP'
import useGlobalContext from '../contexts/useContext';

export default function Home() {
  const { navigate } = useNavigation();
  const { state: { loading } } = useGlobalContext()

  return (
    <View style={styles.container}>
      {
        loading
          ? <Text style={styles.text}>Carregando</Text>
          : (
            <>
              <TouchableOpacity style={styles.goFavoriteButton} onPress={() => navigate('FavoriteCEP')}>
                <Text style={styles.text}>Favoritos</Text>
              </TouchableOpacity>
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
  goFavoriteButton: {
    backgroundColor: "#223240",
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 40,
    left: 10
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