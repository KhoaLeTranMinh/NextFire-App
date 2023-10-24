import { UserProfile } from "../../components/UserProfile"
import { PostFeed } from "../../components/PostFeed"
export default function UserProfilePage({ user, posts }) {
	return (
		<div className='box-center'>
			<UserProfile> user = {user}</UserProfile>
			<PostFeed posts={posts}></PostFeed>
		</div>
	)
}
