import React, {useState, useEffect} from "react";
import { Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';
import Texto from "../componentes/Texto";
import Header from "../componentes/Header";
import loja from "../../assets/loja.jpg"
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    const [audioStatus, setAudioStatus] = useState(false)
    const [sound, setSound] = useState(new Audio.Sound());

    useEffect(() => {
        (async () => {
            console.log('status', audioStatus)
            if (audioStatus) {
                await sound.loadAsync(require('../../assets/audio.mp3'))
                try { 
                    await sound.playAsync() 
                } catch (e) { 
                    console.log(e) 
                }
            } else {
                await sound.stopAsync()
                await sound.unloadAsync()
            }
        })()
    },[audioStatus])

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
        <TouchableOpacity style={{alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: "#211F20", padding: 10, borderRadius: 5}}>
            <Ionicons
                name="play"
                size={32}
                color={audioStatus ? 'white' : 'red'} 
                onPress={()=>setAudioStatus(!audioStatus)} 
            />
            <Texto style={{fontSize: 24, color: 'white'}}>Tocar áudio</Texto>
        </TouchableOpacity>

        <Image source={loja} style={estilos.loja}></Image>
        <Texto style={estilos.texto}>
        📍Endereço: Rua Pedro Lúcio Albuquerque, 134, Lajedo, Pernambuco, CEP 55385-000 
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
        textAlign: "center"
    },
    slogan:{
        color: 'black', 
        fontSize: 30,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold"
        
    }

})