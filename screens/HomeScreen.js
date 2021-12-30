import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button as RNButton } from 'react-native';

import { IconButton } from '../components/components.js';
import Firebase from '../utils/firebase';
import "firebase/compat/auth";
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

import { writeUserData, getUsersData } from '../utils/firebase';

const auth = Firebase.auth();

export default function HomeScreen() {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     getUsersData()
    //         .then(res =>
    //             setUsers(res)
    //         )
    //         .catch(error => console.log(error));
    // }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='dark-content' />
            <View style={styles.row}>
                <Text style={styles.title}>Bienvenue {user.email} !</Text>
                <IconButton
                    name='logout'
                    size={24}
                    color='#fff'
                    onPress={handleSignOut}
                />
            </View>
            <Text style={styles.text}>Votre UID est: {user.uid} </Text>
            <RNButton
                onPress={() => { writeUserData(user.uid, 'bedrghber') }}
                title='Ajouter aux favoris'
                color='#f57c00'
            />
            <Text style={styles.text}></Text>
            <RNButton
                onPress={() => { getUsersData() }}
                title='Récuperer tous les favoris'
                color='#f57c00'
            />
            {/* <Text>{users}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e93b81',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },
    text: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
        marginBottom: 25
    }
});