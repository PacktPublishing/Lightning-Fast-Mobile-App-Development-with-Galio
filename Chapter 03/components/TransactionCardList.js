import React from 'react';
import { View, Text } from 'react-native';
import TransactionItem from "./TransactionItem";

const TransactionCardList = (props) => {
    return (
    <View>
        {props.transactions.map((item, key) => {
            return <TransactionItem name={item.name} price={item.price} key={key}/>
        })}
    </View>
    );
};

export default TransactionCardList;