import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Texto from "../componentes/Texto";
import logo from "../../assets/logo.png"
//import imgSacolao from "../../assets/imagem_sacolao.jpg"

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    return <ScrollView>
        <Image source={logo}/>
        <Texto>
            O Sacolão da Rosa está no mercado de frutas, verduras e legumes desde 2000 e trás sempre os melhores produtos direto do produtor
        </Texto>
        <Texto>
            Estamos Localizados em São Caetano do Sul na Rua Boa Vista Nº123.
        </Texto>
        <Image></Image>
    </ScrollView>;
}

const estilos = StyleSheet.create({
    logo:{
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 4,
    },
    imgSacolao:{
        width: "100%",
        height: 1024/600 * width,
    },

})