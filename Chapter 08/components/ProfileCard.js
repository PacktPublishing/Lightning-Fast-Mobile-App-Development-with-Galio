import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Icon } from 'galio-framework';

export default function ProfileCard(props) {
    const { name, avatar, phone, email } = props;
    return (
        <Block style={styles.card}>
            <Icon name="gear" family="font-awesome" color="#edf6f9" size={21}/>
            <Block center style={{ marginBottom: 32}}>
                <Image style={styles.avatar} source={{ uri: avatar}} />
                <Text size={18} bold color="#edf6f9">{name}</Text>
            </Block>
            <Block row space="between">
                <Text color="#edf6f9" bold>Phone</Text>
                <Text color="#edf6f9">{phone}</Text>
            </Block>
            <Block style={styles.divider} />
            <Block row space="between">
                <Text color="#edf6f9" bold>Email</Text>
                <Text color="#edf6f9">{email}</Text>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#006d77",
        width: "80%",
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 32,
        shadowColor: '#83c5be',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 7
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: '#edf6f9',
        marginTop: 8,
        marginBottom: 8
    }
});