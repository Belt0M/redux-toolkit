import { useEffect } from 'react'
import PostsContainer from './components/PostsContainer'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
	const { error, loading, users } = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<div>
				{users.map(user => (
					<div key={user.id}>{user.name}</div>
				))}
			</div>
			<PostsContainer />
		</div>
	)
}

export default App
