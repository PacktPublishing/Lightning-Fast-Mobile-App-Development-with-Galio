import React from 'react';
import { Block, Text } from 'galio-framework';

const PlayedGameItem = (props) => {
    return (
        <Block row space="between" style={{ marginTop: 16}}>
            <Text color="#707070" size={14}>{props.game}</Text>
            <Text color="#707070" size={14}>{props.hours}h</Text>
        </Block>
    );
}

export default PlayedGameItem;

