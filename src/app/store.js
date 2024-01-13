import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postslice'
import usersReducer from './userslice'
import notificaionreducer from './Notificationslice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notification:notificaionreducer
  }
})
