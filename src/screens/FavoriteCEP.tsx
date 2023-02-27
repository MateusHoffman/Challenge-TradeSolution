import React from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { useGlobalContext } from '../contexts/useContext'
import cep from '../services/helpers';

export default function DetailsCEP() {
  const { navigate } = useNavigation();

  const { state: { favoriteCep }, dispatch } = useGlobalContext()

  function handleCardFavorite(detailsCep: any) {
    dispatch({type: 'setDetailsCep', payload: detailsCep})
    navigate('DetailsCEP');
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigate('Home')}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Text style={[styles.text, { fontSize: 25 }]}>CEPs Favoritos</Text>
      <View style={styles.details}>
        {
          favoriteCep.map((e) => (
            <Pressable
              key={e.cep}
              onPress={() => handleCardFavorite(e)}
              style={[styles.info, {flexDirection: 'row', justifyContent: 'space-between'}]}
            >
              <View key={e.cep} style={[{flexDirection: 'row', alignItems: 'center'}]}>
                <Text style={{ color: '#969696'}}>CEP: </Text>
                <Text>{cep.mask(e.cep)}</Text>
              </View>
              <Image source={require("../../assets/enter.png")}/>
            </Pressable>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16191d',
    alignItems: 'center',
    paddingTop: 100,
    color: '#ffffff',
  },
  goBackButton: {
    backgroundColor: "#223240",
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 40,
    left: 10
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  },
  details: {
    width: 265,
    margin: 12,
  },
  info: {
    width: 265,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
});