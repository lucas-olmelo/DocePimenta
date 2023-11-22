import React, { useState } from 'react';
import Botao from "./Botao";
import Texto from "./Texto";
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function CepSearch() {
  const [cep, setCep] = useState('');
  const [num, setNum] = useState('');
  const [address, setAddress] = useState('');
  const [haveCep, setHaveCep] = useState(false);
  const [errorCep, setErrorCep] = useState(false);

  const fetchAddress = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      const data = response.data;
      console.log(data);
      setAddress(
        `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`
        );
      setHaveCep(true);
      setErrorCep(false);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      setAddress('CEP não encontrado');
      setErrorCep(true);
      setHaveCep(false);
    });
  };

  const saveAddress = async (num) => {
    const endereco = {endereco: address, num: num};

    const enderecoAtualizado = JSON.stringify(endereco);
    
    await AsyncStorage.setItem('address', enderecoAtualizado);
    console.log(enderecoAtualizado);
  }

  return (
    <View>
      <Texto style={styles.descricao}>Endereço de entrega:</Texto>
      <View style={styles.buscaCep}>
        <TextInput style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={text => setCep(text)}
          keyboardType="numeric"
        />
        <Botao style={{backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 4.5, height: 30}} texto="Buscar" acao={fetchAddress}></Botao>
      </View>
      {errorCep&& <Texto style={styles.descricao}>{address}</Texto>}
      {haveCep&& 
        <View>
          <Texto style={styles.descricao}>{address}</Texto>
          <View style={styles.frete}>
            <Texto style={styles.descricao}>Número:</Texto>
            <TextInput style={[styles.input, {width: 75}]}
              onChangeText={num => saveAddress(num)}
              keyboardType="numeric"
            />
            {/* <Botao style={{backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 4.5, height: 30}} texto="Enviar" acao={saveAddress}></Botao> */}
          </View>
        </View>
      }
    </View>
  );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  buscaCep: {
    flexDirection: 'row', 
    width: width - 50, 
    justifyContent: 'space-between',
    marginVertical: 10
  },
  input: {
    height: 30, 
    width: 250, 
    fontSize: 20, 
    backgroundColor: 'white', 
    paddingLeft: 5,
    borderRadius: 10,
    // marginBottom: 10
  },
  frete: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 15
  },
  descricao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
}
});