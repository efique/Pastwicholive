import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FiltersPage } from "../../pages";

export default function FiltersStack() {
    const FiltersStack = createNativeStackNavigator();

    return (
        <FiltersStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#755ebc',
                },
                headerTitleStyle: {
                    color: '#ffffff',
                }
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