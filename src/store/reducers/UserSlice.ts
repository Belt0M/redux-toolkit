import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'

import { IUser } from '../../models/User'

interface IUserState {
	users: IUser[]
	loading: boolean
	error: string
}

const initialState: IUserState = {
	users: [],
	loading: false,
	error: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// usersFetching(state) {
		// 	state.loading = true
		// },
		// usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
		// 	state.users = action.payload
		// 	state.loading = false
		// },
		// usersFetchingError(state, action: PayloadAction<string>) {
		// 	state.error = action.payload
		// 	state.loading = false
		// },
	},
	extraReducers: {
		[fetchUsers.pending.type]: state => {
			state.loading = true
		},
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload
			state.loading = false
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.loading = false
		},
	},
})

export default userSlice.reducer
