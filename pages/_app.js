import { UserContext } from "../lib/context"
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, firestore } from "../lib/firebase"
import { UserHook } from "../lib/hooks"
function MyApp({ Component, pageProps }) {
	const userData = UserHook()
	return (
		<UserContext.Provider value={userData}>
			<Navbar></Navbar>

			<Component {...pageProps} />
			{/* <button type='button' className='btn btn-outline-primary'>
					Boo!
				</button> */}
			<Toaster></Toaster>
		</UserContext.Provider>
	)
}

export default MyApp
