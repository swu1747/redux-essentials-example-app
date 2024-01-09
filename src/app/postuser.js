import React from "react";
import { useSelector } from "react-redux";

const PostUser = ({ userId }) => {
    const user = useSelector((state) => {
        return state.users.find((item) => item.id === userId)
    })
    return (<span>by {user ? user.name : 'Unknown author'}</span>)
}
export default PostUser