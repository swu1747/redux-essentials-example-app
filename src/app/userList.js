import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserList = ({ choseuser }) => {
    const users = useSelector((state) => {
        return state.users
    })



    return (<ul>{users.map((item) =>
        <li key={item.id} value={item.id} onClick={(e) => {
            choseuser(e.target.value)
        }}>{item.name}</li>
    )}</ul>)
}
export default UserList