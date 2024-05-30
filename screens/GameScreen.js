import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';


function generateRandomBetween(min, max, exclude) {
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return random;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) { // direction => 'lower' , 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            console.log('first', userNumber)
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <View style={{ justifyContent: 'center' }}>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Card style={styles.screenCardContainer}>
                    <InstructionText style={styles.buttonsText}>Higher or lower?</InstructionText>
                    <View style={styles.screenBtnContainer}>
                        <View style={styles.actionButton}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="remove-circle" size={24} color="black" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.actionButton}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                                <Ionicons name="add-circle-sharp" size={24} color="black" />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRoundsListLength - itemData.index} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 40,
        padding: 12,
    },
    screenCardContainer: {
        flexDirection: 'column',
    },
    buttonsText: {
        marginBottom: 25
    },
    screenBtnContainer: {
        flexDirection: 'row',
    },
    actionButtonContainer: {
        flexDirection: 'row',
    },
    actionButton: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
}); 