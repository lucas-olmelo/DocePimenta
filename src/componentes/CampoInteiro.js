import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CampoInteiro({valor, acao}) {

    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeros = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeros);
    };
    const numTexto = String(valor);

    return <>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
            <TouchableOpacity style={[{paddingRight: 8}]} onPress={() => {}}>
                    <AntDesign name="minus" size={25} color={'black'} />
            </TouchableOpacity>
            <TextInput
                style={{fontSize: 18, borderWidth: 1, alignItems: 'center', paddingHorizontal: 2, textAlign: 'center'}}
                keyboardType='number-pad'
                selectTextOnFocus
                onChangeText={(novoValor)=>(atualiza(novoValor, acao))}
                value={numTexto}
            />
            <TouchableOpacity style={[{paddingLeft: 8}]} onPress={() => {}}>
                    <AntDesign name="plus" size={25} color={'black'} />
            </TouchableOpacity>
        </View>
    </>
    
}