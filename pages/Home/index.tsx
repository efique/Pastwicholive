import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ClipsList } from "../../components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


export default function HomePage() {
    const [clips, setClips] = useState([])


    if (clips.length == 0) {
        fetch('https://api.twitch.tv/helix/games/top?first=100', { // requete du top 100 des jeux twitch
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer jyjuqv7imq62o6gldfufqoqz4hklhr',
                'Client-id' : 'zq9uuf6vb5lfmuhrvcu9vnodpq91pv'
            }
        })
        .then((response) => response.json()) // liste des jeux
        .then((json) => {
            console.log(json.data)
            json.data.forEach((element : any) => { // Pour chaque jeu
                //console.log(element.id +" : "+ element.name)
                fetch('https://api.twitch.tv/helix/clips?game_id=' + element.id  + '&first=1', { // requete des clips pour chaque jeux
                    method : 'GET',
                    headers : {
                        'Authorization' : 'Bearer jyjuqv7imq62o6gldfufqoqz4hklhr',
                        'Client-id' : 'zq9uuf6vb5lfmuhrvcu9vnodpq91pv'
                    }
                })
                    .then((response) => response.json()) // liste des clips
                    .then((json) => {
                        console.log("\n"+element.name)
                        json.data.forEach((element : any) => { // pour chaque clip
                            console.log(element)
                            setClips(clips => [...clips, element])
                        });
                    })
            });
        })
    }

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
                <ClipsList clips={clips} />
            </ScrollView>
        </SafeAreaView>
    )
}

