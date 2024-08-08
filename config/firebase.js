import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyCuo9Orvair3x-DQyTpg0VeeBbG4xq-emk",
  authDomain: "aikurapet-2170d.firebaseapp.com",
  projectId: "aikurapet-2170d",
  storageBucket: "aikurapet-2170d.appspot.com",
  messagingSenderId: "1048058522187",
  appId: "1:1048058522187:web:ef09e9bd2c7e7e85a3fbce"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };