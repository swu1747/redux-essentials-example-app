import React from "react";
import { postList } from "./postslice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import PostUser from "./postuser";
import TimeAgo from "./timeAgo";
import ReactionButton from "./ReactionButtons";


const PostList = () => {
    const unsortposts = useSelector(postList)
    const posts = unsortposts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (<section className="posts-list">
        {
            posts.map((post) => <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>

                <p className="post-content">{post.content.substring(0, 100)}</p>
                <Link to={`/post/${post.id}`} className="button muted-button">
                    ViewPost
                </Link>
                <PostUser userId={post.userid.toString()} />
                <TimeAgo createdTime={post.date} />
                <ReactionButton post={post} />
            </article>)
        }
    </section>)
}
export default PostList