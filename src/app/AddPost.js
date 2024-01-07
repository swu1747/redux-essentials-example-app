import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from './postslice'
const AddPost = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const dispatch = useDispatch()
    const addPost = () => {
        if (title && content) {
            dispatch(add({
                id: nanoid(),
                title: title,
                content: content
            }))
            settitle('')
            setcontent('')
        }

    }

    return (<section>
        <h2>Add a New Post</h2>
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