import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modify } from "./postslice";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const ModifyPost = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const Postid = props.match.params.id
    const { title, content } = useSelector((state) => {
        return state.posts.find((item) => item.id === Postid)
    })
    const [newtitle, modifytitle] = useState(title)
    const [newcontent, modifycontent] = useState(content)

    const changeTitle = (e) => {
        modifytitle(e.target.value)
    }
    const changeContent = (e) => {
        modifycontent(e.target.value)
    }
    const savechange = () => {
        dispatch(modify({
            id: Postid,
            title: newtitle,
            content: newcontent
        }))
        history.push(`/post/${Postid}`)

    }
    return (<div>
        <input value={newtitle} onChange={changeTitle}></input>
        <input value={newcontent} onChange={changeContent}></input>
        <button onClick={savechange}>save</button>
    </div>)

}
export default ModifyPost