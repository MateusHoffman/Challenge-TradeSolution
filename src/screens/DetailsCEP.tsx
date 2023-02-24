import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../contexts/useContext'

export default function DetailsCEP() {
  const { state: { detailsCep } } = useGlobalContext()
  const { navigate } = useNavigation();

  function navigateToHome(){
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={navigateToHome}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>DetailsCEP</Text>
      <View style={styles.info}>
        <Text>CEP: {detailsCep.cep}</Text>
        <Text>State: {detailsCep.state}</Text>
        <Text>City: {detailsCep.city}</Text>
        <Text>Street: {detailsCep.street}</Text>
        <Text>Neighborhood: {detailsCep.neighborhood}</Text>
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
  info: {
    width: 265,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8
  },
});