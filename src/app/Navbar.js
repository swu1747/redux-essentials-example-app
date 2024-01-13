import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { fetcNotification, selectAllnoti } from './Notificationslice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const fetchNewNotifications = () => {
    dispatch(fetcNotification())
  }
  const unread = useSelector(selectAllnoti).filter((noti) => noti.isRead === false).length
  let unreadNotificationsBadge
  if (unread > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{unread}</span>
    )
  }
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navLinks">
          <Link to='/'>Posts</Link>
          <Link to='/users'>users</Link>
          <Link to='/notification'>Notification{unreadNotificationsBadge}</Link>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  )
}
