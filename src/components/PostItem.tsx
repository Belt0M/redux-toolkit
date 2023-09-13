import { FC } from 'react'
import { IPost } from '../models/Post'

interface IPostItemState {
	post: IPost
}

const PostItem: FC<IPostItemState> = ({ post }) => {
	return (
		<div>
			{post.id + ' - ' + post.title}
			<button>Delete</button>
		</div>
	)
}

export default PostItem
