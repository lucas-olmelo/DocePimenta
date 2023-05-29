import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import Header from '../../componentes/Header';
import Texto from '../../componentes/Texto.js';
import Roupas from './components/Roupas';
export default function Catalogo () {

    const navigation = useNavigation();

    return <>
        <Header />
        <View style={estilos.textContainer}>
            <Texto style={estilos.text}>ROUPAS</Texto>
            <Texto style={[estilos.text, { color: '#000'} ]}>•</Texto>
            <Texto style={[estilos.text, { color: '#ff6f9c'} ]}>FEMININAS</Texto>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
        </View>
        <View style={estilos.line} />
        <ScrollView>
        <Texto style={estilos.text}>LANÇAMENTOS</Texto>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/teste.png')} cost="R$115,00" onclick={()=> navigation.navigate('./Pages/detalhe_produto')}>
            Vestido Bonito :)
          </Roupas>
          <Roupas img={require('../../../assets/roupas/teste2.png')} cost="R$180,00" >
            Vestido Feio :(
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/teste7.png')} cost="R$145,00">
            Vestido Bonito :)
          </Roupas>
          <Roupas img={require('../../../assets/roupas/teste4.png')} cost="R$200,00">
            Vestido Feio :(
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/teste5.png')} cost="R$300,00">
            Vestido Bonito :)
          </Roupas>
          <Roupas img={require('../../../assets/roupas/teste6.png')} cost="R$250,00">
            Vestido Feio :(
          </Roupas>
        </View>

        </ScrollView>
    </>
}

const estilos = StyleSheet.create({
      textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
      },
      text:{
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: '1%'
      },
      line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
      }
});



