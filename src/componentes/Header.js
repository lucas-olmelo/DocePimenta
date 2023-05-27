import React from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import logo from '../../assets/logo.png';

export default function Header() {
    return <View style={styles.container}>
            <Image source={logo} style={styles.image} />
        </View>
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#211F20',
        display: "flex",
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },

    image: {
        width: width * 0.5,
        height: width * 0.3
    }
})