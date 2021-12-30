import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { ClipProps } from "../../types"
import { useNavigation } from '@react-navigation/native';

const ClipsList = (props: {clips: any}) => {
    const {clips} = props;
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            paddingVertical: 20
        },
        card: {
            marginBottom: 20,
        },
        lastCard: {}
    });

    return (
        <View style={styles.container}>
            {
                clips.map((clip: ClipProps, key: number) => {
                    return (
                        <Card
                            style={key === clips.length - 1 ? styles.lastCard : styles.card}
                            onPress={() => {navigation.navigate('Clip')}}
                            key={key}
                        >
                            <Card.Cover style={{ borderRadius: 0 }} source={{uri: clip.thumbnail_url}} />
                            <Card.Title
                                title={clip.title}
                                subtitle={"Par: " + clip.creator_name}
                                right={() => <Card.Title title={clip.duration + "s"} />}
                            />
                        </Card>
                    )
                })
            }
        </View>
    )
}

export default ClipsList;