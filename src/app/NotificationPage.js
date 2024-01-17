import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllnoti } from './Notificationslice'
import parseISO from "date-fns/parseISO";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { userselector } from "./userslice";
import { readNotification } from './Notificationslice'
const Notification = () => {
    const dispatch = useDispatch()
    const notificationList = useSelector(selectAllnoti)
    const userList = useSelector(userselector)
    const renderedNotifications = notificationList.map((noti) => {
        const date = parseISO(noti.date)
        const timeAgo = formatDistanceToNow(date)
        const user = userList.find((user) => user.id === noti.user) || {
            name: '????'
        }
        dispatch(readNotification()) 
        return (<div key={noti.id} className="notification">
            <div>
                <b>{user.name}</b>{noti.message}
            </div>
            <div title={noti.date}>
                <i>{timeAgo} ago</i>
            </div>
        </div>)
    })
    return (<section className="notificationsList">
        <h2>Notifications</h2>
        {renderedNotifications}
    </section>)
}
export default Notification