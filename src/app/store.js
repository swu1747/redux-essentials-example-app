import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postslice'
import usersReducer from './userslice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer
  }
})
