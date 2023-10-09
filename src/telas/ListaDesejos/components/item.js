import React, { useState } from "react";
import Texto from '../../../componentes/Texto.js';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from "../styles/estilos.js";
import { View, Image, TouchableOpacity } from "react-native";
import Botao from "../../../componentes/Botao.js";

export default function Item({ nome, preco, img, qtde: qtdeInicial }) {

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    const [expandir, setExpandir] = useState(false);

    const inverteExpandir = () => {
        setExpandir(!expandir);
        
        //Retorna a quantidade para o estado padrão
        setQuantidade(1);
    };

    function filtroNome(nome){
        if(nome.length < 22){
            return nome;
        }
        return `${nome.substring(0, 20)}...`;
    }

    return <>

        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Image
                source={img}
                style={estilos.shoesImg}
            />
            <View style={estilos.textBox}>
                <Texto style={estilos.shoesText}>
                    {filtroNome(nome)}
                </Texto>
                <View opacity={0.4}>
                    <Texto style={estilos.priceText}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)} </Texto>
                </View>
            </View>
        </TouchableOpacity>
        { expandir &&
            <View style={estilos.listaDesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade:</Texto>
                <CampoInteiro valor={quantidade} acao={atualizaQtdTotal} />
            </View>
            <View style={estilos.posicao}>
                <Texto>Total:</Texto>
                <Texto>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                    .format(total)}</Texto>
            </View>
            <Botao texto='Remover' style={{backgroundColor: 'black'}}></Botao>
        </View>}
        <View style={estilos.divisor} />
    </>
}
