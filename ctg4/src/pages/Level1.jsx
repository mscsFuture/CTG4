import react, { useState, useEffect } from "react";
import {Image, View, StyleSheet, Text, TouchableOpacity, Button} from "react-native";


const Level1 = () => {
    const images = [
        require('Lvl1-1.png'),
        require('Lvl1-2.png'),
        require('Lvl1-3.png'),
        require('Lvl1-4.png'),
    ];

    function Card() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        console.log(randomImage);
    }

    return(
        <View style={styles.cardContainer}>
            <Image source={randomImage} style={{height:200,width:200}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '50%',
        height: '50%',
        backgroundColor: 'white',
    },
});

export default Level1;