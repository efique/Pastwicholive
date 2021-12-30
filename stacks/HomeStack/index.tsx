import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClipPage, HomePage } from "../../pages";

export default function HomeStack() {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#755ebc',
                },
                headerTitleStyle: {
                    color: '#ffffff',
                }
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: 'Accueil'
                }}
            />
            <HomeStack.Screen
                name="Clip"
                component={ClipPage}
                options={{
                    title: 'Clip'
                }}
            />
        </HomeStack.Navigator>
    );
}