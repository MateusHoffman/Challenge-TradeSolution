import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../contexts/useContext'

import cep from '../services/helpers'
import api from '../services/request'

export default function Home() {
  const { navigate } = useNavigation();
  const { dispatch } = useGlobalContext()

  const [inputSearch, setInputSearch] = useState('');
  const [validSearch, setValidSearch] = useState(true);

  async function requestAPI(){
    try {
      dispatch({ type: 'setLoading', payload: true })
      const { data } = await api.getDetailsCep(inputSearch)
      dispatch({ type: 'setLoading', payload: false })
      dispatch({ type: 'setDetailsCep', payload: data })
      setInputSearch('')
      navigate('DetailsCEP')
    } catch {
      alert('CEP inválido. Tente novamente!')
      dispatch({ type: 'setLoading', payload: false })
      setInputSearch('')
    }
  }

  async function handleSearch(){
    const validateCEP = /^[0-9][0-8]\d{3}-\d{3}$/;
    if (validateCEP.test(inputSearch)) {
      requestAPI()
    } else {
      setValidSearch(false)
      setInputSearch('')
    }
  }

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          placeholder="ex: 01234-000"
          keyboardType="numeric"
          maxLength={9}
          value={cep.mask(inputSearch)}
          onChangeText={(e) => setInputSearch(e)}
        />
        { !validSearch && <Text style={styles.subTextInput}>CEP inválido. Tente novamente!</Text> }
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}
          onPress={handleSearch}
        >Buscar CEP
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 265,
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8
  },
  button: {
    width: 265,
    backgroundColor: "#223240",
    padding: 16,
    marginTop: 12,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  },
  subTextInput: {
    color: "#fff",
    width: 265,
    marginLeft: 12,
    textAlign: 'left'
  },
});