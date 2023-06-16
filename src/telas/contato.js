import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Texto from "../componentes/Texto";
import Header from "../componentes/Header.js";
import Icon from "react-native-vector-icons/FontAwesome";
import * as MailComposer from "expo-mail-composer";

const width = Dimensions.get("screen").width;

export default function Contato() {
  const whatsappURL = "https://api.whatsapp.com/send?phone=5511983367853";

  const abrirWhatsApp = () => {
    Linking.openURL(whatsappURL);
  };

  const abrirInsta = () => {
    Linking.openURL(
      "https://instagram.com/doce.__pimenta?igshid=MzRlODBiNWFlZA=="
    );
  };

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = () => {
    if (subject && body) {
      const email = {
        to: "leoleonardo2000@gmail.com",
        subject,
        body,
        isHtml: false,
      };

      MailComposer.composeAsync(email)
        .then((result) => {
          if (result.status === "sent") {
            Alert.alert("E-mail enviado com sucesso!");
          }
        })
        .catch((error) => {
          Alert.alert("Erro ao enviar o e-mail. Por favor, tente novamente.");
        });
    } else {
      Alert.alert("Por favor, preencha todos os campos do formulário.");
    }
  };

  return (
    <ScrollView>
      <Header />

      <Texto style={estilos.slogan}>Entre em contato</Texto>
      <Texto style={estilos.texto}>
        Estamos disponíveis para responder perguntas e atender com prontidão.
      </Texto>

      <View style={estilos.form}>
        <TextInput
          style={estilos.input}
          placeholder="Assunto"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          style={estilos.input}
          placeholder="Mensagem"
          multiline
          numberOfLines={4}
          value={body}
          onChangeText={(text) => setBody(text)}
        />
        <Button color="#211F20" title="Enviar e-mail" onPress={handleSendEmail} />


      </View>
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
  form: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },

});
