import React from "react";
import { Image, StyleSheet, View } from "react-native";


import Texto from '../../../componentes/Texto.js';
import Botao from '../../../componentes/Botao.js'


export default function Descricao({nome,logoSacolao,nomeSacolao,descricao,preco,comprar}) {
    return <>
    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.sacolao}>
            <Image source={logoSacolao} style={estilos.icone} />
            <Texto style={estilos.nomeSacolao}>{nomeSacolao}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <Botao style={estilos.botao}>{comprar}</Botao>
    </View>
    </>
}

const estilos = StyleSheet.create({
    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    sacolao: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeSacolao: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 8,
    },
    icone: {
        width: 40,
        height: 40,
    },
    botao: {
        backgroundColor: "green",
        color: "red"
    }
});