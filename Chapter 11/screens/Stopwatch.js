import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Text, Block, Button } from 'galio-framework';

export default function Stopwatch() {
    // controls
    const [startTime, setStartTime] = useState(); // the first value
    const [laps, setLap] = useState([]); // lap
    const [started, setStarted] = useState(false); // if the clock has started
    const [elapsed, setElapsed] = useState(); //counting up
    const [intervalId, setIntervalId] = useState(); // used for interval

    // time
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [ms, setMs] = useState(0);
    
    const startAndStop = () => {
        if(!started) {
            setStartTime(new Date().valueOf());
            setStarted(true);
        } else if (started) {
            setStarted(false);
        }
    };

    const lap = () => {
        if(started)
            setLap(oldArray => [...oldArray, [minute, seconds, ms]]);
        else
            setLap([]);
    }

    useEffect(() => {
        let _intervalId;
        if(started) {
            _intervalId = setInterval(() => {
                setElapsed(new Date().valueOf()); // aici calculeaza in ms
            }, 10);

            setIntervalId(_intervalId);
        } 
        if(!started && intervalId !== undefined) {
            clearInterval(intervalId);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };

    }, [started]);

    useEffect(() => {
        if(elapsed && started) {
            let delta = Math.abs(new Date().valueOf() - startTime) / 1000;

            let minutes = Math.floor(delta/60) % 60;
            delta -= minutes * 60;

            let seconds = Math.floor(delta % 60);
            // delta -= seconds * 60;

            let totalMs = Math.floor((new Date().valueOf() - startTime) / 10) % 100;
            // let seconds = delta % 60;

            setMs(totalMs);
            setSeconds(seconds);
            setMinute(minutes);
        }
    }, [elapsed]);

    return (
        <Block style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <Block flex={0.32} alignItems="center">
                    <Text style={{ fontSize: 72, marginTop: 32 }}>{minute < 10 ? `0${minute}` : minute}:{seconds < 10 ? `0${seconds}`: seconds}.{ms}</Text>
                    <Block row space="around" style={{ width: '100%'}}>
                        <Button size="small" color={started ? "#6c757d" : "#c9a0dc" } onPress={() => startAndStop()} shadowless>{started ? "Stop" : "Start"}</Button>
                        <Button size="small" color="#f4d1dc" onPress={() => lap()} shadowless>{started ? "Lap" : "Clear laps"}</Button>
                    </Block>
                    <Block row style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Block style={styles.divideLine} />
                        <Text size={16}>Laps</Text>
                        <Block style={styles.divideLine} />
                    </Block>
                </Block>
                <Block flex={0.68}>
                    <FlatList
                        data={laps}
                        renderItem={({item}) => <LapItem item={item} />}
                        bounces={false}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={(item) => laps.indexOf(item).toString()}
                    />
                </Block>
            </SafeAreaView>
        </Block>
    )
}

const LapItem = ({ item }) => {
    return (
        <Block row fluid justifyContent="center">
            <Text h3>{item[0] < 10 ? `0${item[0]}` : item[0]} : {item[1] < 10 ? `0${item[1]}` : item[1]}.</Text>
            <Text p style={{ alignSelf: 'flex-end' }}>{item[2] < 10 ? `0${item[2]}` : item[2]}</Text>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    divideLine: {
        borderWidth: 1,
        borderColor: '#6c757d',
        margin: 10,
        flex: 1
    }
})
