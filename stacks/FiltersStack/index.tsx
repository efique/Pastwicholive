import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FiltersPage } from "../../pages";
import Firebase from '../../utils/firebase';
import "firebase/compat/auth";
import { IconButton } from '../../components/components.js';
import { Text } from 'react-native';

const auth = Firebase.auth();

export default function FiltersStack() {
    const FiltersStack = createNativeStackNavigator();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FiltersStack.Navigator
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
            <FiltersStack.Screen
                name="Filters"
                component={FiltersPage}
                options={{
                    title: 'Filtres'
                }}
            />
        </FiltersStack.Navigator>
    );
}