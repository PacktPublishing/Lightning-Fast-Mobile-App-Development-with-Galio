import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block } from 'galio-framework';

export default function App() {
  return (
    <Block flex style={styles.container}>
      <Block flex={2} middle style={styles.row1}>
        <Block width={40} height={40} style={styles.row1el}/>
      </Block>
      <Block flex style={styles.row2}>
        <Block flex middle row space="evenly" style={styles.row2gal}>
          <Block width={40} height={40} style={styles.row2p1} />
          <Block width={40} height={40} bottom style={styles.row2p2}/>
          <Block width={40} height={40} style={styles.row2p3}/>
        </Block>
      </Block>
      <Block flex={3} style={styles.row3}></Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F94144'
  },
  row1: {
    backgroundColor: '#F3722C'
  },
  row2: {
    backgroundColor: '#90BE6D',
    padding: 30
  },
  row3: {
    backgroundColor: '#277DA1'
  }, 
  row1el: {
    backgroundColor: '#577590'
  },
  row2gal: {
    backgroundColor: '#F9844A'
  },
  row2p1: {
    backgroundColor: '#4D908E'
  },
  row2p2: {
    backgroundColor: '#43AA8B'
  },
  row2p3: {
    backgroundColor: '#F94144'
  }
});


