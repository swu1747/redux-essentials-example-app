import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../api/client";

const initialState = []
const notificationslice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        readNotification(state, action) {
            state.forEach((noti) => {
                noti.isRead = true
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(fetcNotification.fulfilled, (state, action) => {
            action.payload.forEach((noti) => {
                noti.isRead = false
            })
            state.push(...action.payload)
            state.sort((a, b) => b.date.localeCompare(a.date))
        })
    }

})
const fetcNotification = createAsyncThunk('notification/fetchnoti', async (_, { getState }) => {
    const noti = getState().notification[0]
    const latestTimestamp = noti ? noti.date : ''
    const response = await client.get(`/fakeApi/notifications?since=${latestTimestamp}`)
    return response.data
})

export default notificationslice.reducer

export const selectAllnoti = (state) => {
    return state.notification
}
export const { readNotification } = notificationslice.actions

export { fetcNotification }

