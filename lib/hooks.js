import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, firestore } from "./firebase"

//Custom Hook
export function UserHook() {
	const [user] = useAuthState(auth)
	const [username, setUsername] = useState(null)
	useEffect(() => {
		let unsubscribe
		if (user) {
			const ref = firestore.collection("users").doc(user.uid)
			unsubscribe = ref.onSnapshot((doc) => setUsername(doc.data()?.username))
		} else {
			setUsername(null)
		}
		return unsubscribe
	}, [user])
	// console.log({ user, username })
	return { user, username }
}
