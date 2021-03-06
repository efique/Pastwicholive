import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { nextTick } from "process";

export default function HomePage() {
    const [clips, setClips] = useState([])
    const [next, nextPage] = useState("")
    const [pagination, setPagination] = useState("")

    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://api.twitch.tv/helix/games/top?after=' + next + '&first=1', { // requete du top 100 des jeux twitch
            method: 'GET',
            headers: {
                'Authorization': 'Bearer jyjuqv7imq62o6gldfufqoqz4hklhr',
                'Client-id': 'zq9uuf6vb5lfmuhrvcu9vnodpq91pv'
            }
        })
            .then((response) => response.json()) // liste des jeux
            .then((json) => {
                setPagination(json.pagination.cursor)
                json.data.forEach((element: any) => { // Pour chaque jeu
                    fetch('https://api.twitch.tv/helix/clips?game_id=' + element.id + '&first=10', { // requete des clips pour chaque jeux
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
                });
            })
    }, [next])




    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginBottom: useBottomTabBarHeight()
        },
    });

    const styless = StyleSheet.create({
        container: {
            paddingVertical: 20
        },
        card: {
            marginBottom: 20,
        },
        lastCard: {}
    });

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={clips}
                renderItem={({ item }) => (
                    <Card
                        onPress={() => {
                            navigation.navigate('Clip', {
                                id: item.id.toString()
                            })
                        }}

                    >
                        <Card.Cover style={{ borderRadius: 0 }} source={{ uri: item.thumbnail_url }} />
                        <Card.Title
                            title={item.title}
                            subtitle={"Par: " + item.creator_name}
                            right={() => <Card.Title title={item.duration + "s"} />}
                        />
                    </Card>)
                }
                onEndReached={() => {
                    nextPage(pagination)
                }}
                keyExtractor={item => item.id.toString()}
            />


        </SafeAreaView>
    )
}

