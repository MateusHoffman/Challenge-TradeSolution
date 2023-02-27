import React, { useEffect, useState } from 'react'
import { Alert, Image, Pressable, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Clipboard from 'expo-clipboard';

import { useGlobalContext } from '../contexts/useContext'
import cep from '../services/helpers';

export default function DetailsCEP() {
  const { goBack } = useNavigation();

  const { state: { detailsCep, favoriteCep }, dispatch } = useGlobalContext()

  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavorite() {
    if (isFavorited) {
      const newFavoriteCep = favoriteCep.filter(e => e.cep !== detailsCep.cep)
      dispatch({ type: 'setFavoriteCep', payload: newFavoriteCep })
      setIsFavorited(false)
    } else {
      const newFavoriteCep = [...favoriteCep, detailsCep]
      dispatch({ type: 'setFavoriteCep', payload: newFavoriteCep })
      setIsFavorited(true)
    }
  }

  function verifyFavorite() {
    const favorite = favoriteCep.some((e) => e.cep === detailsCep.cep)
    favorite ? setIsFavorited(true) : setIsFavorited(false)
  }

  async function handleShare() {
    try {
      await Share.share({
        message:
          `CEP Consultado: ${cep.mask(detailsCep.cep)}
Estado: ${detailsCep.state}
Cidade: ${detailsCep.city}
Logradouro: ${detailsCep.street}
Bairro: ${detailsCep.neighborhood}

${cep.mask(detailsCep.cep)} - ${detailsCep.state} - ${detailsCep.city} - ${detailsCep.street} - ${detailsCep.neighborhood}`,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function handleCopy() {
    try {
      await Clipboard.setStringAsync(`CEP Consultado: ${cep.mask(detailsCep.cep)}
Estado: ${detailsCep.state}
Cidade: ${detailsCep.city}
Logradouro: ${detailsCep.street}
Bairro: ${detailsCep.neighborhood}

${cep.mask(detailsCep.cep)} - ${detailsCep.state} - ${detailsCep.city} - ${detailsCep.street} - ${detailsCep.neighborhood}`);
      Alert.alert('Texto copiado')
    } catch (error) {
      Alert.alert('Erro ao copiar o texto, tente novamente!')
    }
  }

  useEffect(() => {
    verifyFavorite()
  }, [])
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Text style={[styles.text, { fontSize: 25 }]}>Detalhes do CEP</Text>
      <View style={styles.details}>
        <View style={[styles.info, { alignItems: 'center' }]}>
          <Text style={{ color: '#c4c4c4'}}>CEP CONSULTADO</Text>
          <Text>{cep.mask(detailsCep.cep)}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.info, { width: '50%' }]}>
            <Text style={{ color: '#c4c4c4'}}>CIDADE</Text>
            <Text>{detailsCep.city}</Text>
          </View>
          <View style={[styles.info, { width: '50%' }]}>
            <Text style={{ color: '#c4c4c4'}}>ESTADO</Text>
            <Text>{detailsCep.state}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ color: '#c4c4c4'}}>LOGRADOURO</Text>
          <Text>{detailsCep.street}</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ color: '#c4c4c4'}}>BAIRRO</Text>
          <Text>{detailsCep.neighborhood}</Text>
        </View>
        <View style={[styles.info, styles.sectionButtons]}>
          <Pressable style={styles.button} onPress={handleFavorite}>
            <Image source={isFavorited ? require("../../assets/heart2.png") : require("../../assets/heart1.png")}/>
          </Pressable>
          <Pressable style={styles.button} onPress={handleShare}>
            <Image source={require("../../assets/share.png")}/>
          </Pressable>
          <Pressable style={styles.button} onPress={handleCopy}>
            <Image source={require("../../assets/copy.png")}/>
          </Pressable>
        </View>
      </View>
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
  sectionButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 35,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#223240',
  },
});