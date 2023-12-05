import React, {useState, useEffect} from 'react';
import { Alert, Linking, View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import CepSearch from '../cepSearch';
import estilos from "./estilos";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StatusLista({total, data}) {

    const [user, setUser] = useState([]);
    const [address, setAddress] = useState([]);
    
    const getUser = async () => {
        const userItem = await AsyncStorage.getItem('user');
        if (userItem !== null) {

            setUser(JSON.parse(userItem));
            console.log(user);
        }
    };

    const getAddress = async () => {
        const endereco = await AsyncStorage.getItem('address');
        if (endereco !== null) {
            setAddress(JSON.parse(endereco));
            console.log(address);
        }
    };

    useEffect(() => {
        getUser();
        getAddress();
    }, []);

    const mandaZap = () => {
        console.log(user);
        console.log(address);

        if (user.length > 0) {

            if (address != null) {
                let itens = []
                let msg = '';
                
                msg += 'Olá! Gostaria de fazer uma compra dos seguintes itens na Doce Pimenta:\n\n'
                
                data.forEach(item => {
                    itens.push(item.qtde + 'x ' + item.nome + ' (' + Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.preco) + ')');
                });

                itens.forEach(item => {
                    msg += item + '\n';
                });

                msg +=  '\nValor total: ' +Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total);
                msg += '\n\nCliente: ' +user[0].nome;
                msg += '\nEndereço: ' +address.endereco;
                msg += '\nNúmero: ' +address.num;

                Linking.openURL('whatsapp://send?text='+msg+'&phone=5587996109346');
            } else {
                Alert.alert('Erro', 'Insira o seu endereço!');
            }
            
        } else {
            Alert.alert('Erro', 'Faça login ou cadastre-se para comprar na Doce Pimenta');
        }
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
                <Botao texto='Comprar' style={{backgroundColor: 'red', width: 150}} acao={mandaZap}></Botao>
            </View>
        </View>
    </View>
}