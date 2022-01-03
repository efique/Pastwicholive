import React, {useEffect, useState} from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {Card, Title} from "react-native-paper";
import {ClipsList} from "../../components";
import {getUserData, getUsersData} from "../../utils/firebase";
import {ClipProps} from "../../types";
import {useNavigation} from "@react-navigation/native";

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
        },
        card: {
            marginBottom: 20,
        },
        lastCard: {}
    });
    const [clips, setClips] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(getUsersData())
        }).then((clipsIds) => {
            Object.values(clipsIds).forEach((id: string) => {
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
                        setClips(clips => [...clips, element])
                    });
                })
            })
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Title style={styles.header}>VOS FAVORIS : { clips.length }</Title>
                {
                    clips.map((clip: ClipProps, key: number) => {
                        return (
                            <Card
                                style={key === clips.length - 1 ? styles.lastCard : styles.card}
                                onPress={() => {
                                    navigation.navigate('Clip', {
                                        id: clip.id.toString()
                                    })
                                }}
                                key={key}
                            >
                                <Card.Cover style={{borderRadius: 0}} source={{uri: clip.thumbnail_url}}/>
                                <Card.Title
                                    title={clip.title}
                                    subtitle={"Par: " + clip.creator_name}
                                    right={() => <Card.Title title={clip.duration + "s"}/>}
                                />
                            </Card>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}