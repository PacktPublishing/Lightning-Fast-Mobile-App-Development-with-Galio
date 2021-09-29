import React from 'react';
import { StyleSheet, View } from 'react-native';
import TransactionCard from './components/TransactionCard';
 
const transactions = [
  {name: "Starbucks", price: 10.12},
  {name: "Givenchy", price: 15.12},
  {name: "Target", price: 6.99},
  {name: "Bolt", price: 16.03},
  {name: "Electricity", price: 45.05}
];

export default function App() {
  return (
    <View style={styles.container}>
      <TransactionCard transactions={transactions} name="Alin Gheorghe"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
