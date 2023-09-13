import React, { FC } from 'react'
import { IPost } from '../models/Post'

interface IPostItemState {
	post: IPost
	remove: (post: IPost) => void
	update: (post: IPost) => void
}

const PostItem: FC<IPostItemState> = ({ post, remove, update }) => {
	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation()
		remove(post)
	}

	const handleUpdate = () => {
		const title = prompt() || ''
		update({ ...post, title })
	}

	return (
		<div onClick={handleUpdate}>
			{post.id + ' - ' + post.title}
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}

export default PostItem
