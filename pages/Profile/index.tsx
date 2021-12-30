import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function ProfilePage() {
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
                <Text>page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}