import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';

const WelcomeHeader = () => {
    return (
        <Block>
            <Block row space="between">
                <Text color="#707070" h3>Hello,{'\n'}Alin Gheorghe!</Text>
                <Image style={styles.profilePicture} source={{uri: 'https://via.placeholder.com/65'}} />
            </Block>
            <Text color="#707070" p>Level 3</Text>
        </Block>
    );
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 55,
        height: 55,
        borderRadius: 55/2, 
    },
});

export default WelcomeHeader;

