import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    container:{
        flexDirection: 'column',
        padding: '2%',
        alignItems: 'center',
    },
    prodImg:{
        marginTop: 15,
        width: width/1.5,
        height: width/1.5
    },
    shoesText:{
        fontSize: 20,
        color: 'red'
    },
    priceText: {
        fontSize: 20,
        color: 'black'
    },
    listaDesejos: {
        flexDirection: "column",
        marginTop: 15,
    },
    roupaText: {
        fontSize: 24,
        marginTop: 12,
        color: 'red'
    },
    posicao: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoNome: {
        fontSize: 18
    },  
    textoNomePreco: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold'
    },
})