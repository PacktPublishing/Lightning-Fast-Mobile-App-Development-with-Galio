import React from 'react';
import { View } from 'react-native';
import TransactionCardHeader from './TransactionCardHeader';
import TransactionCardList from './TransactionCardList';


const TransactionCard = (props) => {
    return (
        <View>
            <TransactionCardHeader name={props.name}/>
            <TransactionCardList transactions={props.transactions}/>
        </View>
    );    
};

export default TransactionCard;