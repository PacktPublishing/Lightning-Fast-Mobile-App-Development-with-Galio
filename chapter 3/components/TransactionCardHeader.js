import React from 'react';
import { View, Text } from 'react-native';

const TransactionCardHeader = (props) => {
    return (
    <View>
        <Text>My transactions</Text>
        <Text>{props.name}</Text>
        <Text>Total spent: $600</Text>
    </View>
    );
};

export default TransactionCardHeader;