import React, {useEffect, useState} from "react";
import Item from "./components/item.js";
import Botao from "../../componentes/Botao.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import estilos from "./styles/estilos.js";
import Texto from "../../componentes/Texto.js";
import Header from "../../componentes/Header.js";

export default function ListaDesejos() {

    const [data, setData] = useState([]);
    
    const getData = async () => {
        const ListaDesejos = await AsyncStorage.getItem('ListaDesejos');
        if (ListaDesejos !== null) {
            setData(JSON.parse(ListaDesejos));
        }
    };
    
    useEffect(() => {
        getData();
    }, [])

    const navigation = useNavigation();

    const limpaLista = async () => {
        await AsyncStorage.clear();
        // alert.alert('A lista de desejos foi limpa com sucesso!')
        console.log('A lista de desejos foi limpa com sucesso!');
        navigation.reset({index: 0, routes: [{name: 'Favoritos'}]})
    }
    
    const total = data.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);
        
    return <View style={estilos.container}>
        {/* <Header></Header> */}
        <View style={estilos.topo}>
            <Texto style={estilos.title}>Lista de Desejos</Texto>
            <View style={estilos.botao}>
                <Botao texto='Limpar lista' acao={() => limpaLista()} style={{backgroundColor: 'red'}}></Botao>
            </View>
        </View>

        { !data.length>0&&
            <Texto style={{fontSize: 28, textAlign: 'center', marginTop: 50}}>Sua lista está vazia!</Texto>
        }
        <FlatList
            data={data}
            renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
        <SafeAreaView style={estilos.status}>
            <StatusLista total={total} data={data}/>
        </SafeAreaView>
    </View>
}
