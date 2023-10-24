import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import Loader from "../components/Loader"
import toast from "react-hot-toast"
export default function Home() {
	return (
		<div className='flex justify-around items-center'>
			{/* <ul className=''>
				<li>
					<Link href='/enter'>Click on me!</Link>
				</li>
				<li>
					<Link href={{ pathname: "/[username]", query: { username: "khoa2002" } }}>Click on me again!</Link>
				</li>
			</ul> */}
			{/* <div className=''>
				<Loader show={true}></Loader>
			</div> */}
			{/* <button
				// className='flex-1'
				onClick={() => {
					toast.success("Hello, this is Toast!")
				}}
			>
				Toast me!
			</button> */}
		</div>
	)
}
