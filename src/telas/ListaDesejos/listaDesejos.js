import React from "react";
import Item from "./components/item.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import img1 from '../../../assets/roupas/conjunto_flores.png'
import img2 from '../../../assets/roupas/vestido_azul.png'
import img3 from '../../../assets/roupas/velma.png'

const lista = [
    {
        id: 1,
        nome: 'Conjunto Rosa Florido',
        preco: 250,
        img: img1,
        qtde: 1
    },
    {
        id: 2,
        nome: 'Conjunto Azul',
        preco: 230,
        img: img2,
        qtde: 1
    },
    {
        id: 3,
        nome: 'Cosplay Velma',
        preco: 190,
        img: img3,
        qtde: 1
    },
]

export default function ListaDesejos() {

    const total = lista.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);

            
    return <View>
        <SafeAreaView>
            <StatusLista total={total} />
        </SafeAreaView>
        <FlatList
            data={lista}
            renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </View>
}
