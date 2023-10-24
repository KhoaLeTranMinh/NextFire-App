import React from "react"
import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "../lib/context"
function Navbar() {
	const { user, username } = useContext(UserContext)
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link href={"/"}>
						<button className='btn-logo'>FEED</button>
					</Link>
				</li>
				{username && (
					<>
						<li className='push-left'>
							<Link href={"/admin"}>
								<button className='btn-blue'>Write post</button>
							</Link>
						</li>
						<li>
							<Link href={"/${username}"}>
								<img src={user?.photoURL} alt='' className='src' />
							</Link>
						</li>
					</>
				)}

				{!username && (
					<li>
						<Link href={"/enter"}>
							<button className='btn-red'>Log in </button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
