import { getAnalytics } from "firebase/analytics"
import firebase, { initializeApp } from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
// import { initializeApp } from "firebase/app"
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite"
// import { getAuth } from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth"

// export const app = initializeApp(firebaseConfig)
// // export const firestore = getFirestore(app)
// // export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()
//Only initialize the app if it has not been called
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

const firebaseConfig = {
	apiKey: "AIzaSyDovKDWp-9TaZ3h4hllM2IyPbsz1YaWHi4",
	authDomain: "next-firebase-app-bd099.firebaseapp.com",
	projectId: "next-firebase-app-bd099",
	storageBucket: "next-firebase-app-bd099.appspot.com",
	messagingSenderId: "59318358932",
	appId: "1:59318358932:web:1e6756e255f7ee3f63b581",
	measurementId: "G-NQ89JCC3PT",
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
