import React from "react";
import { useSelector } from "react-redux";
import { postList } from './postslice'
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
        </section>)
    }
    return (<>{PageInfo()}</>)
}

export default SinglePage