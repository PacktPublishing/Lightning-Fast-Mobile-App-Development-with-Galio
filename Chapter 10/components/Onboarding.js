import React, {useState, useRef} from 'react';
import { StyleSheet, FlatList, Animated, SafeAreaView } from 'react-native';
import { Block, Button } from 'galio-framework';

// components
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

// data
import slides from '../slides';

/////////////////////////////////
////////////////////////////////
///////////////////////////////
//////////////////////////////

import React, {useState, useRef} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Animated } from 'react-native';
import { Block, Button } from 'galio-framework';

// components
import OnboardingItem from './OnboardingItem';

import slides from '../slides'; // data

export default function Onboarding() {

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

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
          viewabilityConfig={viewConfig}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset:  { x: scrollX }}}],
            {
              useNativeDriver: false
            }
          )}
        />
      </Block>
      <Paginator data={slides} scrollX={scrollX} />
      <Button onPress={() => {}} color="#c9a0dc" shadowless>
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
  }
});

////

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollX = useRef(new Animated.Value(0)).current;
  // const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // const scrollTo = () => {
  //   if (currentIndex < slides.length - 1) {
  //     slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
  //   } else {
  //     console.log('Last item');
  //   }
  // };

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
            useNativeDriver: false // we're animating width and the native driver does not support that
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          // ref={slidesRef}
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
  },
  nextButton: {
    position: 'absolute',
    right: '20',
    backgroundColor: 'red'
  }
});
