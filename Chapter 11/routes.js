import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon } from 'galio-framework';

// screens
import Onboarding from './screens/Onboarding';
import Stopwatch from './screens/Stopwatch';
import Timer from './screens/Timer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Stopwatch') {
                        iconName = focused ? 'stopwatch' : 'stopwatch-outline';
                    } else if ( route.name === "Timer") {
                        iconName = focused ? 'timer' : 'timer-outline';
                    }

                    return <Icon name={iconName} family="ionicon" size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#c9a0dc',
                inactiveTintColor: '#6c757d',
            }}
        >
            <Tab.Screen name="Stopwatch" component={Stopwatch}/>
            <Tab.Screen name="Timer" component={Timer} />
        </Tab.Navigator>
    );
}

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const [viewedOnboarding, setViewedOnboarding] = useState(false);
    <View>
        <ActivityIndicator size={large} />
    </View>
}

export default function AppStack() {
    const [loading, setLoading] = useState(true);
    const [viewedOnboarding, setViewedOnboarding] = useState(false);

    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding');

            if (value !== null) {
                setViewedOnboarding(true);
            }
        } catch (error) {
            console.log('Error @checkOnboarding: ', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkOnboarding()
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!viewedOnboarding && (<Stack.Screen name="Onboarding" component={Onboarding} options={{
                        headerShown: false
                    }} />)}
                <Stack.Screen name="Tab Navigator" component={AppTabs} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}