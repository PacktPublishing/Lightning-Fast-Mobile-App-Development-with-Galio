import React from 'react'
import { StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Block, Text } from 'galio-framework';

export default function OnboardingItem({item}) {
    const { width } = useWindowDimensions(); //get the width of the screen with this hook

    return (
        <Block style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            <Block flex={0.3}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#c9a0dc',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: 64
    }
});
