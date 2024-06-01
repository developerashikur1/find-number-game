import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions();

    let marginTopScreen = 100;
    let imageSize = 300

    if (width < 380) {
        imageSize = 180;
        marginTopScreen = 60
    }
    
    if (height < 480) {
        imageSize = 90;
        marginTopScreen = 25
    }

    const dynamicImageContainer = {
        height: imageSize,
        width: imageSize,
        borderRadius: imageSize / 2,
    }



    return (
        <ScrollView style={styles.screen}>
            <View style={[styles.container, {marginTop: marginTopScreen}]}>
                <Title style={styles.gameOverText}>Game Over</Title>
                <View style={[styles.imageContainer, dynamicImageContainer]}>
                    <Image style={styles.image} source={require('../assets/images/reached.jpg')} />
                </View>
                <Text style={styles.gameOvarDetails}>Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame} style={styles.startGameButton}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    gameOverText: {
        textTransform: 'uppercase',
        // fontFamily: 'noto-serif',
    },
    imageContainer: {
        // height: deviceWidth < 380 ? 180 : 300,
        // width: deviceWidth < 380 ? 180 : 300,
        // borderRadius: deviceWidth < 380 ? 90 : 150,
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
    gameOvarDetails: {
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