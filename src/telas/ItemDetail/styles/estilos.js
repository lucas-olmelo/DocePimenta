import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    container:{
        flexDirection: 'column',
        padding: '2%',
    },
    startContainer: {
        alignItems: 'center',
    },
    prodImg:{
        marginTop: 15,
        width: width/1.5,
        height: width/1.5,
        borderRadius: 10,
    },
    /*Roupa e preço*/
    listaDesejos: {
        flexDirection: "column", 
        marginTop: 25,
    },
    roupaPreco: {
        marginVertical: 15
    },
    roupaText: {
        fontSize: 28,
        marginBottom: 6,
        color: 'red'
    },
    textoNomePreco: {
        fontSize: 36,
        color: 'red',
        fontWeight: 'bold'
    },
    /*Quantidade e total*/
    nomePreco: {
        alignItems: 'center',
        marginVertical: 15
    },
    textoNome: {
        fontSize: 18
    },  
    posicao: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    precoTotal: {
        fontSize: 18
    }
})