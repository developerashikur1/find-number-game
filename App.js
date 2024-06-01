import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';


SplashScreen.preventAutoHideAsync();


export default function App() {
    const [pickedNumber, setPickedNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRound] = useState(0);
    // setup 
    const [fontsLoaded ] = useFonts({
        'noto-serif': require('./assets/fonts/NotoSerifOttomanSiyaq-Regular.ttf')
    });
    
    // if(!fontsLoaded) {
    //     // return <View><InstructionText>Loading...</InstructionText></View>
    //     return null;
    // }
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);

      
        useEffect(() => {
            onLayoutRootView();
        }, [onLayoutRootView]);
    
      if (!fontsLoaded) {
        return null;
      }

    
    // useEffect(() => {
    //     const onLayoutRootView = async () => {
    //         if(fontsLoaded){
    //             await SplashScreen.hideAsync();
    //         }
    //     }
    //     onLayoutRootView();
    // }, [fontsLoaded]);
    
    // if(!fontsLoaded) {
    //     return <View><InstructionText> Loading.... </InstructionText></View>;
    // }

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded || fontError) {
    //       await SplashScreen.hideAsync();
    //     }
    //   }, [fontsLoaded, fontError]);
    
    //   if (!fontsLoaded && !fontError) {
    //     return null;
    //   }
    


    const pickedNumberHandler = (number) => {
        setPickedNumber(number);
        setGameIsOver(false);
    }
    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRound(numberOfRounds);
    }

    function startNewGamehandler() {
        setPickedNumber(null);
        setGuessRound(0);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
    if(pickedNumber){
        screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />;
    }
    
    if(gameIsOver && pickedNumber) {
        screen = <GameOverScreen onStartNewGame={startNewGamehandler} userNumber={pickedNumber} roundNumber={guessRounds} />
    }


    return (
        <>
        <StatusBar style='inverted' />
        {/* <StatusBar backgroundColor={'green'} /> */}
        <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.container} >
            <ImageBackground source={require('./assets/images/nice.jpg')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImg} >
                <SafeAreaView style={styles.container} >
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImg: {
        opacity: 0.35,
    },
});
