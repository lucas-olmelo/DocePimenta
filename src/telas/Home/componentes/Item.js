import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto.js';

export default function Item({ item: { nome, imagem } }) {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>

}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: "center",
    },
})