import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../api/client'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postslice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        // add: {
        //     reducer: (state, action) => {
        //         state.push(action.payload)
        //     },
        //     prepare: (title, content, userid) => {
        //         return {
        //             payload: {
        //                 date: new Date().toISOString(),
        //                 id: nanoid(),
        //                 title,
        //                 content,
        //                 userid,
        //                 reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
        //             }
        //         }
        //     }
        // },
        modify: (state, action) => {
            const post = state.posts.find((item) => item.id === action.payload.id)
            post.title = action.payload.title
            post.content = action.payload.content
        },
        reactionchange: (state, action) => {
            const post = state.posts.find((item) => {
                return item.id === action.payload.id
            })
            post.reactions[action.payload.emoji] += 1
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'pending'
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.posts = state.posts.concat(action.payload)
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }).addCase(addNewPost.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
    }
})
export const addNewPost = createAsyncThunk('posts/addNewPost', async (post) => {
    const response = await client.post('/fakeApi/posts', post)
    return response.data
})
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
})
export const selectPostById = (state, postId) => {
    return state.posts.posts.find((post) => post.id === postId)
}
export const postList = (state) => {
    return state.posts.posts
}
export default postslice.reducer
export const { add, modify, reactionchange } = postslice.actions
