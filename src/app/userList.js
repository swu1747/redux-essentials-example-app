import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userselector } from "./userslice";

const UserList = ({ choseuserid }) => {
    const users = useSelector(userselector)

    return (<><label htmlFor="postAuthor">Author:</label>
        <select onChange={(e) => {
            choseuserid(e.target.value)
        }}>
            <option value=''></option>
            {users.map((item) =>
                <option key={item.id} value={item.id} >{item.name}</option>
            )}
        </select>
    </>)
}
export default UserList