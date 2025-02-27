import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../api/client'

const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
    const users = await client.get('/fakeApi/users')
    return users.data
})
const initialState = []

const userList = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.push(...action.payload)
        })
    }
})
export const userselector = (state) => {
    return state.users
}
export default userList.reducer
export { fetchUser }