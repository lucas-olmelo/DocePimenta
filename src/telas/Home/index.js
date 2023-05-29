import React from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View } from "react-native";

import Imagens from "../imagens.js"
import Header from '../../componentes/Header.js';

import cupom from "../../../assets/cupom.jpg";
import promo from "../../../assets/promo.jpg";


export default function Home () {
    return <>
        <ScrollView>
            <Header style={estilos.header}/>
            <Imagens style={estilos.carrosel}/>
            <View style={estilos.container}>
                <Image style={estilos.imagem} source={cupom}/>
                <Image style={estilos.imagem} source={promo}/>
            </View>
        </ScrollView>
    </>
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center'
    },

    carrosel: {
        marginVertical: 50
    },

    header: {
        marginBottom: 50
    },

    imagem: {
        marginVertical: 20,
        width: width * 0.7,
        height: width * 0.7
    }
})
