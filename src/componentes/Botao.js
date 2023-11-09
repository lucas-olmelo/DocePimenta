import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto.js";

export default function Botao({texto, style, acao}) {

    return  <TouchableOpacity style={[styles.button, style]} onPress={acao}>
                <Texto style={styles.buttonText}>{texto}</Texto>
            </TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 6,
        marginHorizontal: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
});