import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Topo from "../Home/componentes/Topo.js";
import Descricao from "../Home/componentes/Descricao.js";
import Item from "./componentes/Item.js";
import Texto from '../../componentes/Texto.js';


export default function Cesta({ topo, detalhes, botao, itens }) {
    // return <ScrollView>
    //    <Topo {...topo} />
    //    <Descricao {...detalhes}{...botao} />
    //    <Itens {...itens} />
    // </ScrollView>
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => (nome)}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <Descricao {...detalhes}{...botao} />
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
        paddingHorizontal:16,
    }
})

