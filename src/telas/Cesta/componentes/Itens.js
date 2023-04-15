import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto.js';

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {/*Exibe os itens da lista com o MAP do js*/}
        {lista.map(({ nome, imagem }) => {
            return <View key={nome} style={estilos.item}>
                <Image source={imagem} />
                <Texto style={estilos.nome}>{nome}</Texto>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight:"bold",
        fontSize:32,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
    },
    nome: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft:11,
    },
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
})