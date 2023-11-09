import React from 'react';
import { View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import CepSearch from '../cepSearch';
import estilos from "./estilos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function StatusLista({total}) {

    const navigation = useNavigation();

    const limpaLista = async () => {
        await AsyncStorage.clear();
        // alert.alert('A lista de desejos foi limpa com sucesso!')
        console.log('A lista de desejos foi limpa com sucesso!');
        navigation.reset({index: 0, routes: [{name: 'Favoritos'}]})
    }

    return <View style={estilos.conteudo}>
        <CepSearch></CepSearch>
        <View style={estilos.containerTotal}>
            <View style={estilos.total}>
                <Texto style={estilos.descricao}>Valor total da lista:</Texto>
                <Texto style={estilos.valor}>{
                    Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
                }</Texto>
            </View>
            <View style={estilos.botao}>
                <Botao texto='Comprar' style={{backgroundColor: 'red', width: 150}}></Botao>
            </View>
        </View>
    </View>
}