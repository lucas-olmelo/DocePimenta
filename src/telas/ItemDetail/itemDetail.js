import React, {useState} from 'react';
import { View, Image } from "react-native";
import estilos from "./styles/estilos.js";
import Texto from '../../componentes/Texto';
import Botao from '../../componentes/Botao';
import CampoInteiro from '../../componentes/CampoInteiro.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../componentes/BackButton.js';

export default function Item({route}) {

    const { id, nome, preco, img } = route.params;

    const navigation = useNavigation();

    const [total, setTotal] = useState(preco);
    const [quantidade, setQuantidade] = useState(1);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    async function addListaDesejos(id, nome, preco, img, quantidade) {
        
        const addProduto = [{
            id: id,
            nome: nome,
            preco: preco,
            img: img,
            qtde: quantidade
        }]

        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if (listaDesejosSalva !== null) {
            const listaDesejos = JSON.parse(listaDesejosSalva);
            
            listaDesejos.forEach(async item => {
                if (String(id) === String(item.id)) {
                    const index = listaDesejos.findIndex(item => item.id === id)
                    quantidade = item.qtde + 1;
                    listaDesejos.splice(index, 1);
                } 
            })

            listaDesejos.push({id: id, nome: nome, preco: preco, img: img, qtde: quantidade});
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            navigation.navigate('Favoritos');

            console.log(listaDesejos);

        } else {
            const listaDesejosAtualizada = JSON.stringify(addProduto);
            
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            navigation.navigate('Favoritos');
            console.log('Inseriu item na lista');
        }
    }

    return <>
        <View style={estilos.container}>
            <View style={estilos.startContainer}>
                <BackButton acao={() => {navigation.goBack()}} color={'black'}></BackButton>
                <Image
                    source={img}
                    style={estilos.prodImg}
                />
            </View>
            <View style={estilos.listaDesejos}>
                <View style={estilos.roupaPreco}>
                    <Texto style={estilos.roupaText}>{nome}</Texto>
                    <Texto style={estilos.textoNomePreco}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                        .format(preco)}</Texto>
                </View>
                <View style={estilos.nomePreco}>
                    <View style={estilos.posicao}>
                        <Texto style={estilos.textoNome}>Quantidade: </Texto>
                        <CampoInteiro style={estilos.textoNomePreco} valor={quantidade} acao={atualizaQtdTotal}/>
                    </View>
                    <View style={estilos.posicao}>
                        <Texto style={estilos.textoNome}>Total: </Texto>
                        <Texto style={estilos.precoTotal}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                        .format(total)}</Texto>
                    </View>
                    <Botao texto='Adicionar' acao={() => addListaDesejos(id, nome, preco, img, quantidade)} style={{backgroundColor: 'black', width: 220, marginTop: 10}}/>
                </View>
            </View>
            {/* <CepSearch></CepSearch> */}
        </View>
    </>
}