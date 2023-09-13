import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostsContainer: React.FC = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5)

	return (
		<div>
			{error && <h1>Data fetching error</h1>}
			{isLoading && <h1>Loading...</h1>}
			{posts?.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	)
}

export default PostsContainer
