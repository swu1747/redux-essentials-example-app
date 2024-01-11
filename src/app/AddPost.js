import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from './userList'
import addNewPost from './postslice'
const AddPost = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [userid, setuserid] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const dispatch = useDispatch()
    const addPost = async () => {
        if ((title && content && userid !== undefined || '') && addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                await dispatch(addNewPost({ title, content, userId: userid })).unwrap()
                settitle('')
                setcontent('')
                setuserid('')
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
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