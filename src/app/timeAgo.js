import React from "react";
import { parseISO, formatDistanceToNow } from 'date-fns'
const TimeAgo = ({ createdTime }) => {
    let ago = ''
    if (createdTime) {
        const time = parseISO(createdTime)
        const timeperiod = formatDistanceToNow(time)
        ago = `${timeperiod}`
    }
    return (<span title={createdTime}>
        &nbsp;<i>{ago}</i>
    </span>)
}
export default TimeAgo