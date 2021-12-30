import firebase from './firebase';
import {
    getAuth,
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithCredential,
} from 'firebase/auth';
import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';

export async function signInWithFacebook() {
    try {
        await Facebook.initializeAsync({
            appId: Constants.manifest.extra.facebook.appId,
        });
        const { type, token, expirationDate, permissions, declinedPermissions } =
            await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}