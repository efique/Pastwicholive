import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function ClipPage() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginBottom: useBottomTabBarHeight()
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Clip Page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}