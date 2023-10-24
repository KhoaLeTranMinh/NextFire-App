import { auth, googleAuthProvider, firestore } from "../lib/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useCallback, useContext, useEffect, useState } from "react"
import { UserContext } from "../lib/context"
import debounce from "lodash.debounce"
// import { doc, deleteDoc } from "firestore/firestore"
export default function Enter(props) {
	const { user, username } = useContext(UserContext)
	return <div>{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}</div>
}

export function SignInButton() {
	const signInWithGoogle = async () => {
		try {
			// await signInWithPopup(googleAuthProvider)
			await auth.signInWithPopup(googleAuthProvider)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<button className='btn-google' onClick={signInWithGoogle}>
			<img src={"/images/google.png"} alt='' />
			Sign in with Google
		</button>
	)
}

export function SignOutButton() {
	return <button onClick={auth.signOut()}>Sign Out</button>
}

export function UsernameForm() {
	const [formValue, setFormValue] = useState("")
	const [isValid, setIsValid] = useState(false)
	const [loading, setLoading] = useState(false)
	const { user, username } = useContext(UserContext)
	const onChange = (e) => {
		const val = e.target.value.toLowerCase()
		const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

		if (val.length < 3) {
			setFormValue(val)
			setLoading(false)
			setIsValid(false)
		}

		if (re.test(val)) {
			setFormValue(val)
			setLoading(true)
			setIsValid(false)
		}
	}
	const onSubmit = async (e) => {
		try {
			e.preventDefault()
			const userDoc = firestore.doc(`user/${user.uid}`)
			const usernameDoc = firestore.doc(`usernames/${formValue}`)

			const batch = firestore.batch()
			batch.set(userDoc, { username: formValue, photoBruh: user.photoURL, displayName: user.displayName })
			batch.set(usernameDoc, { uid: user.uid })

			await batch.commit()
		} catch (e) {
			console.log(e)
		}
	}
	const checkUsername = useCallback(
		debounce(async (username) => {
			if (username.length >= 3) {
				const ref = firestore.doc(`usernames/${username}`)
				const { exists } = await ref.get()
				console.log("Firestore read executed!")
				setIsValid(!exists)
				setLoading(false)
			}
		}, 500),
		[]
	)
	useEffect(() => {
		checkUsername(formValue)
	}, [formValue])
	return (
		!username && (
			<section>
				<h3>Chooose Username</h3>
				<form onSubmit={onSubmit}>
					<input name='username' placeholder='username' value={formValue} onChange={onChange} />
					<UsernameMessage username={formValue} isValid={isValid} loading={loading}></UsernameMessage>
					<button className='btn-green' type='submit' disabled={!isValid}>
						Choose
					</button>
					<h3>Debug state</h3>
					<div>
						Username: {formValue}
						<br />
						Loading: {loading.toString()}
						<br />
						Username valid :{isValid.toString()}
					</div>
				</form>
			</section>
		)
	)
}

function UsernameMessage({ username, isValid, loading }) {
	if (loading) {
		return <p>Checking...</p>
	} else if (isValid) {
		return <p className='text-success'>{username} is available!</p>
	} else if (username && !isValid) {
		return <p className='text-danger'>That username is taken!</p>
	} else {
		return <p></p>
	}
}
