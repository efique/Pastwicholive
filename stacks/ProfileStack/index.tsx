import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfilePage } from "../../pages";
import Firebase from '../../utils/firebase';
import "firebase/compat/auth";
import { IconButton } from '../../components/components.js';
import { Text } from 'react-native';

const auth = Firebase.auth();

export default function ProfileStack() {
    const ProfileStack = createNativeStackNavigator();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProfileStack.Navigator
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
            <ProfileStack.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    title: 'Profil'
                }}
            />
        </ProfileStack.Navigator>
    );
}