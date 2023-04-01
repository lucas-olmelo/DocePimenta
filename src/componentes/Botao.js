import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../componentes/Texto.js"

export default function Botao({ children, style }) {
    
    let fundoCor = estilos.botaoPad;

    let textoCor = estilos.botaoTextoPad;

    if(style?.backgroundColor != "purple"){
        fundoCor= estilos.botaoPersonalizado;
    }
    if(style?.color != "white"){
        textoCor = estilos.botaoTextoPer;
    }

    return<> 
    <TouchableOpacity style={[style, fundoCor]}>
        <Texto style={[style, textoCor]}>{children}</Texto>
    </TouchableOpacity>
</>
}

const estilos = StyleSheet.create({
    botaoPad: {
        backgroundColor: "purple",
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 6,
    },
    botaoPersonalizado: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 6,
    },
    botaoTextoPad: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 26,
    },
    botaoTextoPer: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 26,
    },
});