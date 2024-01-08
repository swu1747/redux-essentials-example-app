import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from './postslice'
import UserList from './userList'
const AddPost = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [user, setuser] = useState('')
    const dispatch = useDispatch()
    const addPost = () => {
        if (title && content&&user) {
            dispatch(add(title, content, user))
            settitle('')
            setcontent('')
            setuser('')
        }

    }
    const choseuser = (user) => {
        setuser(user)
    }

    return (<section>
        <h2>Add a New Post</h2>
        <UserList choseuser={ choseuser}/>
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