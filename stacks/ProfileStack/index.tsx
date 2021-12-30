import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfilePage } from "../../pages";

export default function ProfileStack() {
    const ProfileStack = createNativeStackNavigator();

    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#755ebc',
                },
                headerTitleStyle: {
                    color: '#ffffff',
                }
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