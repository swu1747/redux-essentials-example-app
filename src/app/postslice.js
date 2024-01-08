import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'haha', content: 'heiheiheihei', user: 'Tianna Jenkins' },
    { id: '2', title: 'hello', content: 'world', user: 'Kevin Grant' }
]
const postslice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content,user) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        user
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
