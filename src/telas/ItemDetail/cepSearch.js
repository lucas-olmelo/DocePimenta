import React, { useState } from 'react';
import Botao from "../../componentes/Botao";
import Texto from "../../componentes/Texto";
import {View, Text, TextInput} from 'react-native';
import axios from 'axios';

export default function CepSearch() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');

  const fetchAddress = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        const data = response.data;
        console.log(data);
        setAddress(
          `CEP: ${data.cep},
          Logradouro: ${data.logradouro},
          Bairro: ${data.bairro},
          Cidade: ${data.localidade},
          Estado: ${data.uf}`
        );
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        setAddress('CEP não encontrado');
      });
  };
  return (
    <View>
      <TextInput style={{height: 50, width: 250, fontSize: 20}}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={text => setCep(text)}
        keyboardType="numeric"
      />
      <Botao style={{backgroundColor: 'black'}} texto="Buscar Endereço" acao={fetchAddress}></Botao>
      <Texto style={{fontSize: 18}}>{address}</Texto>
    </View>
  );
}