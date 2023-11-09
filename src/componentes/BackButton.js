import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({acao, color}){
    return (<TouchableOpacity style={[{padding: 15}]} onPress={acao}>
                <AntDesign name="back" size={40} color={color} />
            </TouchableOpacity>)
}