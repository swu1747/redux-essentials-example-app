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
        },
        modify: (state, action) => {
            const post = state.find((item) => item.id === action.payload.id)
            post.title = action.payload.title
            post.content = action.payload.content
        }
    }
})
export const postList = (state) => {
    return state.posts
}
export default postslice.reducer
export const { add, modify } = postslice.actions
