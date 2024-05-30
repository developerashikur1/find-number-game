import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

function PrimaryButton({ children, onPress, style }) {
    const pressHandler = () => {
        onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) =>
                pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer, style]} onPress={pressHandler} android_ripple={{ color: colors.primary500 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: '#ddb52f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        textAlign: 'center',
        color: "white",
        fontFamily: 'noto-serif',
    },

    pressed: {
        opacity: 0.75,
    },
});