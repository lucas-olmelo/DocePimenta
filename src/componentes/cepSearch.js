import React, { useState } from 'react';
import Botao from "./Botao";
import Texto from "./Texto";
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import axios from 'axios';

export default function CepSearch() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [haveCep, setHaveCep] = useState(false);

  const fetchAddress = () => {
    setHaveCep(true);
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        const data = response.data;
        console.log(data);
        setAddress(
          `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`
        );
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        setAddress('CEP não encontrado');
      });
  };

  return (
    <View>
      <View style={styles.buscaCep}>
        <TextInput style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={text => setCep(text)}
          keyboardType="numeric"
        />
        <Botao style={{backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 4.5, height: 30}} texto="Buscar" acao={fetchAddress}></Botao>
      </View>
      {haveCep&& 
        <View>
          <Texto style={styles.descricao}>{address}</Texto>
          <View style={styles.frete}>
            <Texto style={styles.descricao}>Valor do frete:</Texto>
            <Texto style={styles.valorFrete}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(15)} </Texto>
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
    justifyContent: 'space-between'
  },
  input: {
    height: 30, 
    width: 250, 
    fontSize: 20, 
    backgroundColor: 'white', 
    paddingLeft: 5,
    borderRadius: 10,
    marginBottom: 10
  },
  frete: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5
  },
  descricao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
},
  valorFrete: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: 'red',
  }
});