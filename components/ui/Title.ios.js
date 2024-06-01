import { Platform, StyleSheet, Text } from "react-native";


const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'noto-serif',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 3, 
        // 2types of test case of Platform wise setting
        // borderWidth: Platform.OS === 'android' ? 1 : 3, //! first way
        // borderWidth: Platform.select({ios: 3, android: 0}), //! second way
        // borderWidth: Platform.select({ios: 3, android: 0}), 
        borderColor: 'white',
        padding: 12,
    },
});