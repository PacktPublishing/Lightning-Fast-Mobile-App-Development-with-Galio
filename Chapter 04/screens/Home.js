import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeHeader from '../components/WelcomeHeader';
import MostPlayedGame from '../components/MostPlayedGame';
import LastPlayedGameList from '../components/LastPlayedGameList';

const games = [
    {game: "Bioshock", time: 2},
    {game: "Call of Duty", time: 5},
    {game: "GTA 4", time: 1},
    {game: "Need for Speed", time: 3},
    {game: "Among us", time: 1},
];

const Home = () => {
    return (
        <View style={styles.container}>
            <WelcomeHeader />
            <MostPlayedGame />
            <LastPlayedGameList games={games}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EDEB',
        paddingHorizontal: 32,
        paddingVertical: 64
    }
});

export default Home;
