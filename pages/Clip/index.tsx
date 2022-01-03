import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { WebView } from 'react-native-webview';
import { IconButton, Colors } from "react-native-paper";
import { writeUserData, deleteUserData, getUserData } from "../../utils/firebase"

export default function ClipPage({ route }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginBottom: useBottomTabBarHeight(),
            justifyContent: 'center'
        },

        buttons: {
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const [clip, setClipUrl] = useState("")
    const [fav, setFav] = useState(false)

    const favoris = getUserData(route.params.id)
    const promise = new Promise((resolve, reject) => {
        resolve(favoris)
    });

    useEffect(() => {
        fetch('https://api.twitch.tv/helix/clips?id=' + route.params.id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer jyjuqv7imq62o6gldfufqoqz4hklhr',
                'Client-id': 'zq9uuf6vb5lfmuhrvcu9vnodpq91pv'
            }
        })
            .then((response) => response.json()) // liste des clips
            .then((json) => {
                console.log(json.data[0].embed_url)
                setClipUrl(json.data[0].embed_url.toString())


                promise.then((value) => {
                    setFav(value)
                })
            })
    }, [])

    return (
        <View style={styles.container}>
            {clip != "" ? (
                <ScrollView>
                    <WebView source={{ uri: clip + "&parent=localhost" }} style={{ alignSelf: 'stretch', height: 250 }} />
                    <View style={styles.buttons}>
                        {fav == false ?
                            (
                                <IconButton
                                    icon="heart-plus-outline"
                                    color={Colors.red600}
                                    size={200}
                                    onPress={() => {
                                        setFav(true)
                                        writeUserData(route.params.id)
                                    }}
                                />
                            )
                            : (
                                <IconButton
                                    icon="heart-remove"
                                    color={Colors.red600}
                                    size={200}
                                    onPress={() => {
                                        setFav(false)
                                        deleteUserData(route.params.id)
                                    }}
                                />
                            )
                        }
                    </View>
                </ScrollView>
            ) : null}
        </View>
    )
}