import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from './postslice'
import UserList from './userList'
const AddPost = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [userid, setuserid] = useState('')
    const dispatch = useDispatch()
    const addPost = () => {
        if (title && content && userid !== undefined || '') {
            dispatch(add(title, content, userid))
            settitle('')
            setcontent('')
            setuserid('')
        }

    }
    const choseuserid = (user) => {
        setuserid(user)
    }

    return (<section>
        <h2>Add a New Post</h2>
        <UserList choseuserid={choseuserid} />
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type='text' name="postTitle" id="postTitle" onChange={(e) => {
                settitle(e.target.value)
            }} value={title}></input>
            <input type='text' name="postContent" id="postContent" onChange={(e) => {
                setcontent(e.target.value)
            }} value={content}></input>
            <button type="button" onClick={addPost}>add post</button>
        </form>
    </section>)
}
export default AddPost