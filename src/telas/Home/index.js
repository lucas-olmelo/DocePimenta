import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Imagens from "../imagens.js"

export default function Home({ topo, detalhes, botao, itens }) {
    return <ScrollView>
    <Imagens></Imagens>
    </ScrollView>
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

