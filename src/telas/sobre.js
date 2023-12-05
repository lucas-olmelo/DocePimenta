import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import Texto from "../componentes/Texto";
import Header from "../componentes/Header";
import loja from "../../assets/loja.png"
import Icon from "react-native-vector-icons/FontAwesome";

const width = Dimensions.get('screen').width;

export default function Sacolao(){

    const whatsappURL = "https://api.whatsapp.com/send?phone=5511983367853";

    const abrirWhatsApp = () => {
        Linking.openURL(whatsappURL);
    };

    const abrirInsta = () => {
        Linking.openURL(
        "https://instagram.com/doce.__pimenta?igshid=MzRlODBiNWFlZA=="
        );
    };

    return <ScrollView>
        <Header />
        <Texto style={estilos.slogan}>
            Fazemos você se sentir linda
        </Texto>
        <Texto style={estilos.slogan}>
            Vestimos nossas Pimentas com estilo, qualidade e elegância!!!
        </Texto>
        <Texto style={estilos.texto}>
           Somos uma loja de roupa localizada em Pernambuco, 
           buscando sempre visar o bem estar de nossos clientes.
        </Texto>
        <Image source={loja} style={estilos.loja}></Image>
        <Texto style={estilos.texto}>
        📍Av. Agamenon Magalhães, nº73, centro, Lajedo, Pernambuco, CEP 55385-000 
        </Texto>
        <Texto style={estilos.texto}>
        <Icon name="whatsapp" size={30} color="#25D366" />{" "}
        <Texto onPress={abrirWhatsApp} style={estilos.link}>
          (11) 98336-7853
        </Texto>
        </Texto>
        <Texto style={estilos.texto}>
            <Icon name="instagram" size={30} color="#E1306C" />{" "}
            <Text onPress={abrirInsta} style={estilos.link_insta}>
            @doce.pimentaof
            </Text>
        </Texto>
    </ScrollView>;
}

const estilos = StyleSheet.create({
    loja:{
        alignSelf: "center",
        margin: 40,
        borderRadius: 30,
        width: "90%",
        height: 1024/900 * width,
    },
    texto:{
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
        marginHorizontal: 10
    },
    slogan:{
        color: 'black', 
        fontSize: 30,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold"
        
    }

})