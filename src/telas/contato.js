import React from "react";
import { Image, ScrollView, Text, StyleSheet, Dimensions, Linking } from "react-native";
import Texto from "../componentes/Texto";
import Header from '../componentes/Header.js';
import loja from "../../assets/loja.jpg"; // Mudar imagem
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;

export default function Contato() {
  const phoneNumber = "5511983367853"; // Número de telefone
  const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, ""); // Remover caracteres especiais
  //const whatsappURL = 'https://api.whatsapp.com/send?phone=${phoneNumber}';
  const whatsappURL = 'https://api.whatsapp.com/send?phone=5511983367853';

  const abrirWhatsApp = () => {
    Linking.openURL(whatsappURL);
  };

  const abrirInsta = () => {
    Linking.openURL('https://instagram.com/doce.__pimenta?igshid=MzRlODBiNWFlZA==');
  };

  return (
    <ScrollView>
      <Header />
      <Texto style={estilos.slogan}>Entre em contato</Texto>
      <Texto style={estilos.texto}>
        Estamos disponíveis para responder perguntas e atender com prontidão.
      </Texto>

      <Texto style={estilos.texto}>
        <Icon name="whatsapp" size={30} color="#25D366" />{" "}
        <Text onPress={abrirWhatsApp} style={estilos.link}>
          (11) 98336-7853
        </Text>
      </Texto>
      
      <Texto style={estilos.texto}>
        <Icon name="instagram" size={30} color="#E1306C" />{" "}
        <Text onPress={abrirInsta} style={estilos.link_insta}>
          @doce.pimentaof
        </Text>
      </Texto>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  loja: {
    alignSelf: "center",
    margin: 40,
    borderRadius: 30,
    width: "90%",
    height: (1024 / 900) * width,
  },
  texto: {
    color: "black",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  slogan: {
    color: "black",
    fontSize: 30,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "underline",
    color: "#25D366",
  },
  link_insta: {
    textDecorationLine: "underline",
    color: "#3f729b",
  },
});
