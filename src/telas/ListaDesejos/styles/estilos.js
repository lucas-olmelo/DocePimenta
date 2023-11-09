import React from "react-native";
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default StyleSheet.create({
    container: {
        height: height - 55,
    },
    topo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#211F20',
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    status: {
        position: 'absolute',
        bottom: 55,
        width: width
    },


    produtos: {
        flexDirection: 'row',
        padding: '2%',
        alignItems: 'center',
        padding: 20
    },
    textBox: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        width: '100%'
    },
    shoesImg:{
        marginTop: 15,
        width: 100,
        height: 100
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
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    desejos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: "wrap"
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});