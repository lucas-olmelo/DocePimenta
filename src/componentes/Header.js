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
        paddingVertical: 15
    },

    image: {
        width: width * 0.7,
        height: width * 0.2
    }
})