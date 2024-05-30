import React from 'react';
import { StyleSheet, Text } from 'react-native';

const InstructionText = ({children, style}) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'noto-serif',
        color: 'yellow',
        fontSize: 24,
    },
})