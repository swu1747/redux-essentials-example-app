import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { postList } from "./postslice";
const SingleUser = (props) => {
    const userId = props.match.params.userId
    const posts = useSelector(postList).filter((post) => {
        return post.user === userId
    })
    console.log(posts)
    return (<ul>
        {posts.map((post) => <li key={post.id}><Link to={`/post/${post.id}`} className="button muted-button">{post.title}</Link></li>)}
    </ul>)
}
export default SingleUser