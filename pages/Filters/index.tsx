import React, {useState} from "react";
import { Button, StyleSheet, Platform, SafeAreaView, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {Title} from "react-native-paper";

export default function FiltersPage() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
        setMode('date');
    };

    const displayDate = (date: Date) => {
        return ('0' + date.getDate()).slice(-2) + '/'
            + ('0' + (date.getMonth()+1)).slice(-2) + '/'
            + date.getFullYear();
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
                <Title>TEST</Title>
                <Button onPress={showDatepicker} title={displayDate(date)} />

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}