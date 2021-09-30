import React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';

import NewsCard from './components/NewsCard';
import ProfileCard from './components/ProfileCard';
import RegisterForm from './components/RegisterForm';
import CommerceCard from './components/CommerceCard';

export default function App() {
  return (
    // <SafeAreaView>
    //   <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.lineBreak}/>
          <NewsCard 
            author="Richard Johnson"
            date="10 minutes ago"
            title="Cleaning and organizing your computer"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu vestibulum metus, at suscipit lorem. Etiam consectetur efficitur quam, sit amet dignissim nulla gravida eu."
            avatar="https://i.pravatar.cc/100"
          />
          <View style={styles.lineBreak}/>
          <ProfileCard 
            name="John Travor"
            avatar="https://i.pravatar.cc/100"
            phone="+1-202-555-0197"
            email="johntravor@gmail.com"
          />
          <View style={styles.lineBreak}/> */}
          <RegisterForm />
          <View style={styles.lineBreak}/>
          <CommerceCard itemName="Japanese Painting" price={300}/>
          <View style={styles.lineBreak}/>
        </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineBreak: {
    marginVertical: 12
  }
});
