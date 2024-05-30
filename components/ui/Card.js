import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

const Card = ({children, style}) => {
    return  <View style={[styles.cardContainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 36,
        // paddingTop: 25,
        marginHorizontal: 24,
        padding: 16,
        // backgroundColor: '#4e0329',
        backgroundColor: colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

});

