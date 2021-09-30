import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Icon } from 'galio-framework';

export default function NewsCard(props) {
    const { author, date, title, summary, avatar } = props;
  return (
      <Block style={styles.card}>
        <Block row space="between">
          <Block row>
            <Image style={styles.avatar} source={{uri: avatar}}/>
            <Block style={{ paddingLeft: 8 }}>
              <Text size={14} color={'rgba(0,0,0,0.8)'}>{author}</Text>
              <Text size={10} color={'rgba(0,0,0,0.5)'}>{date}</Text>
            </Block>
          </Block>
          <Icon name="bookmark" family="feather" color={'rgb(42,92,250)'} size={20}/>
        </Block>
        <Block style={{ paddingTop: 8 }}>
          <Text size={16} color={'rgba(0,0,0,0.8)'}>{title}</Text>
          <Text size={12} color={'rgba(0,0,0,0.5)'}>{summary}</Text>
        </Block>
      </Block>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 8,
    width: '80%',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    elevation: 7
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
