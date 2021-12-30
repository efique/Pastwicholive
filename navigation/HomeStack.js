import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import HomePage from '../pages/Home';
import NavigationTabs from '../navigation/NavigationTabs'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={NavigationTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}