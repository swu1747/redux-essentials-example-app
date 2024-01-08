import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'haha', content: 'heiheiheihei', userid: '1' },
    { id: '2', title: 'hello', content: 'world', userid: '2' }
]
const postslice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content,userid) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userid
                    }
                }
            }
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
