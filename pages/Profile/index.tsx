import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {Title} from "react-native-paper";
import {ClipsList} from "../../components";
import {getUsersData} from "../../utils/firebase";

export default function ProfilePage() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginBottom: useBottomTabBarHeight()
        },
        header: {
            backgroundColor: 'rgb(190,174,255)',
            padding: 10,
            textAlign: "center"
        }
    });

    function getClips() {
        let test = ['PopularAgileWoodpeckerShadyLulu', 'PopularAgileWoodpeckerShadyLulu', 'ScaryRelentlessVelociraptorBabyRage']
        let clips = [];
        test.forEach((id: string) => {
            fetch(`https://api.twitch.tv/helix/clips?id=${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer jyjuqv7imq62o6gldfufqoqz4hklhr',
                    'Client-id': 'zq9uuf6vb5lfmuhrvcu9vnodpq91pv'
                }
            })
            .then((response) => response.json()) // liste des clips
            .then((json) => {
                json.data.forEach((element: any) => { // pour chaque clip
                    clips.push(element)
                });
            })
        });
        return clips;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Title style={styles.header}>VOS FAVORIS</Title>
                <ClipsList clips={getClips()} />
            </ScrollView>
        </SafeAreaView>
    )
}