import React from "react";
import Item from "./components/item.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView } from "react-native";
import lista from "../../mocks/lista.js";

export default function ListaDesejos() {

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
