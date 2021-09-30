import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import { Text, Block, Button } from 'galio-framework';

export default function Timer() {
    const [countdownMinutes, setCountdownMinutes] = useState("00");
    const [countdownSeconds, setCountdownSeconds] = useState("30");

    const [final, setFinal] = useState(); // time in future that the timer needs to get to
    const [timer, setTimer] = useState();
    const [timeDisplay, setTimeDisplay] = useState();
    const [intervalId, setIntervalId] = useState();
    const [startTimer, setStartTimer] = useState(false);

    const [title, setTitle] = useState('Exercise 01');

    const [sound, setSound] = useState();

    const start = () => {
        if(!startTimer) {
            var t = new Date();
            t.setMinutes(t.getMinutes() + parseInt(countdownMinutes));
            t.setSeconds(t.getSeconds() + parseInt(countdownSeconds));
    
            setFinal(t.valueOf());
            setStartTimer(true);

            loadSound();
        } else if(startTimer) {
            setStartTimer(false);
            clearInterval(intervalId);
        }
    };

    const loadSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/ring.mp3'));

        setSound(sound);
    }

    useEffect(() => {
        let _intervalId;
        if (final) {
            _intervalId = setInterval(() => {
                setTimer(new Date().valueOf())
            }, 250);
        }
        setIntervalId(_intervalId);
        return () => {
            clearInterval(_intervalId);
        }
    }, [final]);

    useEffect(() => {
        if (final && timer) {
            let display = Math.floor((final - timer) / 1000);
            if (timeDisplay !== display) 
                setTimeDisplay(display); // total seconds
                
            const minutes = Math.floor(display / 60) % 60;
            display -= minutes * 60;
            setCountdownMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
            setCountdownSeconds(display < 10 ? `0${display}` : display.toString());      
        }
    }, [timer]);

    useEffect( () => {
        console.log("Time displayed: ", timeDisplay);

        if (timeDisplay <= 0) {
            clearInterval(intervalId);
            console.log("It's done!")
            setTimeDisplay(0);
            setCountdownMinutes("0");
            setCountdownSeconds("0");
            setStartTimer(false);

            if (sound)
                sound.playAsync();
        }
    }, [timeDisplay]);

    useEffect(() => {
        return sound ? () => {
            console.log("Unloading sound");
            sound.unloadAsync();
        } : undefined;
    }, [sound])

    return (
        <Block style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <Block flex style={{ paddingHorizontal: 16 }}>
                        <TextInput 
                            value={title}
                            onChangeText={setTitle}
                            returnKeyType='done'
                            clearTextOnFocus
                            style={{ borderBottomWidth: 1, fontSize: 54 }}
                        />
                    </Block>
                    <Block flex alignItems="center">
                        <Block row>
                            <TextInput
                                style={{ borderBottomWidth: 2, fontSize: 54 }}
                                keyboardType="numeric"
                                value={countdownMinutes}
                                onChangeText={setCountdownMinutes}
                                returnKeyType='done'
                                editable={!startTimer}
                                clearTextOnFocus
                            />
                            <Text style={{ alignSelf: 'center', fontSize: 54 }}>:</Text>
                            <TextInput
                                style={{ borderBottomWidth: 2, fontSize: 54 }}
                                keyboardType="numeric"
                                value={countdownSeconds}
                                onChangeText={setCountdownSeconds}
                                returnKeyType='done'
                                editable={!startTimer}
                                clearTextOnFocus
                            />
                        </Block>
                        <Button size="large" onPress={() => start()} style={{ marginTop: 32 }} color={startTimer ? "#6c757d" : "#c9a0dc"} shadowless>
                            {startTimer ? "Stop" : "Start"}
                        </Button>
                    </Block>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Block>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
})
