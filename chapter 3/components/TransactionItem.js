import React from 'react';
import { View, Text } from 'react-native';

const TransactionItem = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>$ {props.price}</Text>
        </View>
    );
};

export default TransactionItem;

