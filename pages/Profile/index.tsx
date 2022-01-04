import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Card, Title } from "react-native-paper";
import { getUsersData } from "../../utils/firebase";
import { ClipProps } from "../../types";
import { useNavigation } from "@react-navigation/native";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


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
        lastCard: {},
        refresh: {
            textAlign:"center"
        }
    });
    const [clips, setClips] = useState([]);
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(getUsersData())
        }).then((clipsIds) => {
            setClips([]);
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
    }, [refresh])

   

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setRefresh(refresh => !refresh);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Title style={styles.refresh}>Scrollez vers le bas pour rafraîchir la liste </Title>
                <Title style={styles.header}>VOS FAVORIS : {clips.length}</Title>
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
                                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: clip.thumbnail_url }} />
                                <Card.Title
                                    title={clip.title}
                                    subtitle={"Par: " + clip.creator_name}
                                    right={() => <Card.Title title={clip.duration + "s"} />}
                                />
                            </Card>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}