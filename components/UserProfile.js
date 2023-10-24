import React from "react"

export default function UserProfile({ user }) {
	return (
		<div className='box-center'>
			<img src={user.photoURL} alt='' className='card-img-center' />
			<button></button>
		</div>
	)
}
