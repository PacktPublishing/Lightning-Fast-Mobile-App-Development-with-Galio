import React, {useState, useRef} from 'react';
import { StyleSheet, FlatList, Animated, SafeAreaView } from 'react-native';
import { Block, Button } from 'galio-framework';
import AsyncStorage from '@react-native-async-storage/async-storage';

// components
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';

// data
import slides from '../slides';

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Tab Navigator');
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (error) {
        console.log("Error @setItem: ", err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block flex={3}>
        <FlatList 
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}], 
            {
            useNativeDriver: false
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </Block>
      <Paginator data={slides} scrollX={scrollX}/>
      <Button onPress={scrollTo} color="#c9a0dc" shadowless>
          Next
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  nextButton: {
    position: 'absolute',
    right: '20',
    backgroundColor: 'red'
  }
});
