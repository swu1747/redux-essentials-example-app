import React from "react";
import { useSelector } from "react-redux";
import { postList } from './postslice'
import { Link } from "react-router-dom/cjs/react-router-dom";
const SinglePage = (props) => {
    const postlist = useSelector(postList)
    const item = props.match.params.postId

    const PageInfo = () => {
        const post = postlist.find((post) => post.id === item)

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
            </article>
            <Link to={`/modify/${item}`} className="button muted-button">Modify Post</Link>
        </section >)
    }
    return (<>{PageInfo()}</>)
}

export default SinglePage