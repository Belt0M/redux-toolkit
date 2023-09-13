import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../models/User'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	const { usersFetching, usersFetchingError, usersFetchingSuccess } =
// 		userSlice.actions
// 	try {
// 		dispatch(usersFetching())
// 		const response = await axios.get<IUser[]>(
// 			'https://jsonplaceholder.typicode.com/users'
// 		)
// 		setTimeout(() => {
// 			dispatch(usersFetchingSuccess(response.data))
// 		}, 1500)
// 	} catch (e: unknown) {
// 		let errorMessage
// 		e instanceof Error ? (errorMessage = e.message) : (errorMessage = String(e))
// 		dispatch(usersFetchingError(errorMessage))
// 	}
// }

export const fetchUsers = createAsyncThunk(
	'type/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			return response.data
		} catch (e) {
			const errorMessage = e instanceof Error ? e.message : String(e)
			return thunkAPI.rejectWithValue(errorMessage)
		}
	}
)
