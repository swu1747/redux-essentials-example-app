import React, { useEffect } from "react";
import { postList, fetchPosts } from "./postslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import PostUser from "./postuser";
import TimeAgo from "./timeAgo";
import ReactionButton from "./ReactionButtons";
import { Spinner } from '../components/Spinner'
import { fetchUser } from "./userslice";


const PostList = () => {
    const dispatch = useDispatch()
    const unsortposts = useSelector(postList)
    const postStatus = useSelector((state) => state.posts.status)
    const error = useSelector(state => state.posts.error)


    useEffect(() => {

        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus])

    let content
    if (postStatus === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (postStatus === 'succeeded') {
        const posts = unsortposts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = posts.map((post) => <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/post/${post.id}`} className="button muted-button">
                ViewPost
            </Link>
            <PostUser userId={post.user} />
            <TimeAgo createdTime={post.date} />
            <ReactionButton post={post} />
        </article>)

    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (<section className="posts-list">
        {content}
    </section>)
}
export default PostList