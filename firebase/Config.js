import { initializeApp } from 'firebase/app'
import {getFirestore,collection, addDoc,serverTimestamp} from 'firebase/firestore'
import { QuerySnapshot, onSnapshot, query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHhPvwz2PNMhq0t9ssc12yr-PeVJX7WR4",
    authDomain: "chat-8d624.firebaseapp.com",
    projectId: "chat-8d624",
    storageBucket: "chat-8d624.appspot.com",
    messagingSenderId: "51563288239",
    appId:  "1:51563288239:web:4a092118a9c237fe2fa65a"
}

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    QuerySnapshot,
    MESSAGES
}