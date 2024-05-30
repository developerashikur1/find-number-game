import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({roundNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.container}>
            <Title style={styles.gameOverText}>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/reached.jpg')} />
            </View>
            <Text style={styles.gameOvarDetails}>Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame} style={styles.startGameButton}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        // backgroundColor: 'green'
    },
    gameOverText:{
        textTransform: 'uppercase',
        // fontFamily: 'noto-serif',
    },
    imageContainer: {
        height: deviceWidth < 380 ? 180 : 300,
        width: deviceWidth < 380 ? 180 : 300,
        borderRadius: deviceWidth < 380 ? 90 : 150,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 35,
        marginBottom: 35
    },
    image: {
        height: '100%',
        width: '100%',
    },
    gameOvarDetails:{
        fontSize: 24,
        // fontFamily: 'noto-serif',
        textAlign: 'center',
        color: 'white',
        marginBottom: 35,
    },
    highlight: {
        fontWeight: 'bold',
        color: colors.primary500,
    },
    startGameButton: {
        backgroundColor: colors.primary600,
    },
}); 