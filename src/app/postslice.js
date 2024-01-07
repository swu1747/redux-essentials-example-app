import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'haha', content: 'heiheiheihei' },
    { id: '2', title: 'hello', content: 'world' }
]
const postslice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const postList = (state) => {
    return state.posts
}
export default postslice.reducer
export const { add } = postslice.actions
