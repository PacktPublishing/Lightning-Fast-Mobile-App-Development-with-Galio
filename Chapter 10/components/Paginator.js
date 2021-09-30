import React from 'react'
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'

export default function Paginator({ data, scrollX }) {
    const { width } = useWindowDimensions();
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i+1) * width]; // previous dot, current dot and next dot

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp' // it is important for this to be here
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: 'clamp'
                });

                return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#d4b3e3',
        marginHorizontal: 8,
    }
});
