import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import colors from '../constants/colors';
import Title from '../components/ui/Title';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const nubmerInputHnadler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //..show alert
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
                { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
            ]);
            return;
        }

        onPickedNumber(chosenNumber);
    }


    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText style={styles.colors}>Enter a Number</InstructionText>
                <TextInput
                    style={styles.textInput}
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize='none'
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={nubmerInputHnadler}
                    value={enteredNumber}
                />
                <View style={styles.buttonPair}>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton></View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        // flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

    colors:{
        color: 'red', // colors ovverriden 
    },

    textInput: {
        borderBottomWidth: 3,
        borderColor: colors.accent500,
        height: 50,
        width: 55,
        fontSize: 32,
        fontFamily: 'noto-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.accent500,
        marginVertical: 8,
    },

    buttonPair: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },

});