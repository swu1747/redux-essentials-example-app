import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import PostUser from "./postuser";
import TimeAgo from "./timeAgo";
import ReactionButton from "./ReactionButtons";
import {selectPostById} from './postslice'
const SinglePage = (props) => {
    const item = props.match.params.postId
    const post = useSelector((state) => {
        return selectPostById(state, item)
    })


    const PageInfo = () => {
        if (!post) {
            return (
                <section>
                    <h2>Post not found!</h2>
                </section>
            )
        }
        return (<section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostUser userId={post.userid} />
                <TimeAgo createdTime={post.date} />
                <ReactionButton post={post} />
            </article>
            <Link to={`/modify/${item}`} className="button muted-button">Modify Post</Link>
        </section >)
    }
    return (<>{PageInfo()}</>)
}

export default SinglePage