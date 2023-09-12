import React, {useState} from "react";
import estilos from "../styles/estilos.js";
import { View, TouchableOpacity, Image, Button } from "react-native";
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';
import CampoInteiro from '../../../componentes/CampoInteiro';
import imge from '../../../../assets/roupas/conjunto_flores.png'

export default function Item({nome, preco, img}) {

    const [expandir, setExpandir] = useState(false);
    const [total, setTotal] = useState(preco);
    const [quantidade, setQuantidade] = useState(1);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    function filtroNome(nome){
        if(nome.length < 20){
            return nome;
        }
        return `${nome.substring(0, 19)}...`;
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);

        //Retorna a quantidade para o estado padrão
        setQuantidade(1);
    };

    return <>
        <View>
            <TouchableOpacity style={estilos.container} onPress={inverteExpandir}>
                <Image
                    source={img}
                    style={estilos.shoesImg}
                />
                <View style={estilos.textBox}>
                    <Texto style={estilos.shoesText}>
                        {(img)}
                    </Texto>
                    <View opacity={0.4}>
                        <Texto style={estilos.shoesText}> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)} </Texto>
                    </View>
                    { expandir &&
                        <View style={estilos.listaDesejos}>
                            <View style={estilos.nomePreco}>
                                <View style={estilos.posicao}>
                                    <Texto style={estilos.textoNomePreco}>Quantidade: </Texto>
                                    <CampoInteiro style={estilos.textoNomePreco} valor={quantidade} acao={atualizaQtdTotal}/>
                                </View>
                                <View style={estilos.posicao}>
                                    <Texto style={estilos.textoNomePreco}>Total: </Texto>
                                    <Texto style={estilos.textoNomePreco}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                                    .format(total)}</Texto>
                                </View>
                            </View>
                            <Botao texto='Adicionar' style={{backgroundColor: 'black', width: 220}}/>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        </View>
    </>
}
