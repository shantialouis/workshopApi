import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
const Profile = ({match}) => {
    const [profiles,setProfiles]=useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`)
        .then((res)=>setProfiles(res.data))
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            {profiles.map(profile=>(
               <Link to={`/profile/post/${profile.id}`} key={profile.id}> 
               <div key={profile.id}>
              <h3>{profile.title}</h3>
              <p>{profile.body}</p>
              </div>  </Link>
            
            )
            
            )}

        </div>
    )
}

export default Profile
