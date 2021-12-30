import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClipPage, HomePage } from "../../pages";
import Firebase from '../../utils/firebase';
import "firebase/compat/auth";
import { IconButton } from '../../components/components.js';
import { Text } from 'react-native';

const auth = Firebase.auth();

export default function HomeStack() {
    const HomeStack = createNativeStackNavigator();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <HomeStack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#755ebc',
                },
                headerTitleStyle: {
                    color: '#ffffff',
                },
                headerRight: () => (
                    <Text style={{ marginRight: 25 }}>
                        <IconButton
                            name='logout'
                            size={24}
                            color='#fff'
                            onPress={handleSignOut}
                        /></Text>
                )
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