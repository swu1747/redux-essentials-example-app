import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { userselector } from "./userslice";
const Userspage = () => {
    const users = useSelector(userselector)


    return (<><ul>
        {
            users.map((user) => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)
        }
    </ul></>)
}

export default Userspage