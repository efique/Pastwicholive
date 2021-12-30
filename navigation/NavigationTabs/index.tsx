import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, FiltersStack, ProfileStack } from "../../stacks";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#b0aac3',
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: ({ fontWeight: 'bold', marginBottom: 6 }),
                tabBarIconStyle: ({ marginBottom: -6 }),
                tabBarActiveBackgroundColor: '#755ebc',
                tabBarInactiveBackgroundColor: '#755ebc',
            }}
        >
            <Tab.Screen name="HomeTab" component={HomeStack} options={{
                tabBarLabel: 'Accueil',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="FiltersTab" component={FiltersStack} options={{
                tabBarLabel: 'Filtres',
                tabBarLabelPosition: 'below-icon',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="ProfileTab" component={ProfileStack} options={{
                tabBarLabel: 'Profil',
                tabBarLabelPosition: 'below-icon',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}