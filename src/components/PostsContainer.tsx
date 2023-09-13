import { IPost } from '../models/Post'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostsContainer: React.FC = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100)
	const [createPost] = postAPI.useCreatePostMutation()
	const [deletePost] = postAPI.useDeletePostMutation()
	const [updatePost] = postAPI.useUpdatePostMutation()

	const handleCreate = async () => {
		const title = prompt()
		await createPost({ title, body: title } as IPost)
	}

	const handleDelete = async (post: IPost) => {
		await deletePost(post)
	}

	const handleUpdate = async (post: IPost) => {
		await updatePost(post)
	}

	return (
		<div>
			{error && <h1>Data fetching error</h1>}
			{isLoading && <h1>Loading...</h1>}
			<button onClick={handleCreate}>Create new post</button>
			{posts?.map(post => (
				<PostItem
					key={post.id}
					post={post}
					remove={handleDelete}
					update={handleUpdate}
				/>
			))}
		</div>
	)
}

export default PostsContainer
