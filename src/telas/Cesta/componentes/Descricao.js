import React from "react";
import { Image, StyleSheet, View } from "react-native";


import icone from '../../../../assets/icon.png';
import Texto from '../../../componentes/Texto.js';



export default function Descricao() {
    return <>
    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Frutas</Texto>
        <View style={estilos.sacolao}>
            <Image source={icone} style={estilos.icone} />
            <Texto style={estilos.nomeSacolao}>Sacolão da Rosa</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos cuidadosamente
            selecionados da horta direto para sua cozinha.</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
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
});