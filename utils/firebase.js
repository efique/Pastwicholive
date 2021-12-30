import firebase from 'firebase/compat';
import Constants from 'expo-constants';
import "firebase/compat/auth";
import { collection, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";

let Firebase;

Firebase = firebase.initializeApp(Constants.manifest.extra.firebase);
const db = getFirestore();

export async function writeUserData(id, url) {
    await addDoc(collection(db, "utilisateurs"), {
        user_id: id,
        url_clip: url,
    });
}

export async function getUsersData() {
    let user = Firebase.auth().currentUser;
    const q = query(collection(db, "utilisateurs"), where("user_id", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let users = {};
    querySnapshot.forEach((doc) => {
        users[Object.keys(users).length + 1] = doc.data().url_clip;
    });
    console.log(users);
    // return querySnapshot;
}

export default Firebase;