import axios from 'axios';
import React, { useState,useEffect } from 'react'
import User from './User';
import {Link} from 'react-router-dom'
import Profile from './Profile' 
const UsersList = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
         {users.map(user=>
            <Link to={`/profile/${user.id}`} key={user.id}><User user={user} /></Link>
            )}
        </div>
    )
}

export default UsersList
