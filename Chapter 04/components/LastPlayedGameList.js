import React from 'react';
import { Block, Text } from 'galio-framework';
import PlayedGameItem from './PlayedGameItem';

const LastPlayedGameList = (props) => {
    return (
        <Block style={{ marginTop: 32}}>
            <Text color="#707070" size={18}>Last played games:</Text>
            {props.games.map((item, key) => {
                return  <PlayedGameItem game={item.game} hours={item.time} key={key} />;
            })}
        </Block>
    );
}

export default LastPlayedGameList;
