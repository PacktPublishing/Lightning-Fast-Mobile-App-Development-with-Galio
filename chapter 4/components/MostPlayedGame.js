import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';

const MostPlayedGame = () => {
    return (
        <Block style={styles.container}>
            <Image
                style={styles.image} 
                source={{uri: 'https://via.placeholder.com/300'}} />
            <Text size={15} color="#707070">Most played game: League of Legends</Text>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        backgroundColor: "#D8E2DC",
        paddingBottom: 4
    },
    image: {
        width: 'auto',
        height: 60,
        resizeMode: 'cover'
    }
});

export default MostPlayedGame;

