import firebase from 'firebase/compat';
import Constants from 'expo-constants';
import "firebase/compat/auth";
import { collection, addDoc, getFirestore, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

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
    return users;
}

export async function deleteUserData(url_clip) {
    let user = Firebase.auth().currentUser;
    const q = query(collection(db, "utilisateurs"), where("user_id", "==", user.uid), where("url_clip", "==", url_clip));
    const querySnapshot = await getDocs(q);
    let users = {};
    querySnapshot.forEach((doc) => {
        users[0] = doc.id;
    });
    await deleteDoc(doc(db, "utilisateurs", users[0]));
    return users;
}

export default Firebase;