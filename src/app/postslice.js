import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
    { id: '1', title: 'haha', content: 'heiheiheihei', userid: '1', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
    { id: '2', title: 'hello', content: 'world', userid: '2', date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } }
]
const postslice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content, userid) => {
                return {
                    payload: {
                        date: new Date().toISOString(),
                        id: nanoid(),
                        title,
                        content,
                        userid,
                        reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
                    }
                }
            }
        },
        modify: (state, action) => {
            const post = state.find((item) => item.id === action.payload.id)
            post.title = action.payload.title
            post.content = action.payload.content
        },
        reactionchange: (state, action) => {
            const post = state.find((item) => {
                return item.id === action.payload.id
            })
            post.reactions[action.payload.emoji] += 1
        }
    }
})
export const postList = (state) => {
    return state.posts
}
export default postslice.reducer
export const { add, modify, reactionchange } = postslice.actions
