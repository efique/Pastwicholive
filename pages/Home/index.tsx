import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ClipsList } from "../../components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


export default function HomePage() {
    const [clips, setClips] = useState([
        {
            "id": "ShortRoughBisonLeeroyJenkins-CDEjFc4_x7mDa3q9",
            "url": "https://clips.twitch.tv/ShortRoughBisonLeeroyJenkins-CDEjFc4_x7mDa3q9",
            "embed_url": "https://clips.twitch.tv/embed?clip=ShortRoughBisonLeeroyJenkins-CDEjFc4_x7mDa3q9",
            "broadcaster_id": "160504245",
            "broadcaster_name": "39daph",
            "creator_id": "23907697",
            "creator_name": "SirTreace",
            "video_id": "",
            "game_id": "66410",
            "language": "en",
            "title": "Just daph things",
            "view_count": 14001,
            "created_at": "2021-04-18T11:01:50Z",
            "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C1140626359-preview-480x272.jpg",
            "duration": 22.7
        },
        {
            "id": "AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "url": "https://clips.twitch.tv/AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "embed_url": "https://clips.twitch.tv/embed?clip=AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "broadcaster_id": "160504245",
            "broadcaster_name": "39daph",
            "creator_id": "28981092",
            "creator_name": "ninjyte",
            "video_id": "",
            "game_id": "66410",
            "language": "en",
            "title": "That's a really big arrow",
            "view_count": 6021,
            "created_at": "2021-04-18T10:48:52Z",
            "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C1140619553-preview-480x272.jpg",
            "duration": 9.2
        },
        {
            "id": "AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "url": "https://clips.twitch.tv/AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "embed_url": "https://clips.twitch.tv/embed?clip=AuspiciousDignifiedPartridgeOSfrog-krhwUDt3LWHsTWnJ",
            "broadcaster_id": "160504245",
            "broadcaster_name": "39daph",
            "creator_id": "28981092",
            "creator_name": "ninjyte",
            "video_id": "",
            "game_id": "66410",
            "language": "en",
            "title": "That's a really big arrow",
            "view_count": 6021,
            "created_at": "2021-04-18T10:48:52Z",
            "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C1140619553-preview-480x272.jpg",
            "duration": 9.2
        }
    ])

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

