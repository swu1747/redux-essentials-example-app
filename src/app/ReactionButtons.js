import React from "react";
import { useDispatch } from "react-redux";
import { reactionchange } from "./postslice";

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch()
    const emojis = () => {
        return Object.entries(reactionEmoji).map(([name, emoji]) => {
            return (<button key={name} value={name} onClick={(e) => {
                dispatch(reactionchange({
                    id: post.id,
                    emoji: e.target.value
                }))
            }} type="button" className="muted-button reaction-button">
                {emoji}{post.reactions[name]}
            </button>)
        })
    }
    return (<div>{emojis()}</div>)
}
export default ReactionButton