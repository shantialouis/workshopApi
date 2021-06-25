import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
const User = ({user}) => {
    return (
        <div>
            <ul>
            <span>{user.name}</span>  
            </ul>
       
        </div>
    )
}

export default User
