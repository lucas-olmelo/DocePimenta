import React , {useState, useEffect} from "react";
import Item from "./components/item.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default  function ListaDesejos() {

    const total = lista.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);

    return <SafeAreaView>
        <StatusLista total={total} />
        <FlatList
			data={lista}
			renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </SafeAreaView>
}
