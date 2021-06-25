import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

const Post = ({match}) => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
        .then((res)=>
        {
            setPosts(res.data);
            console.log('res')
        })
        .catch((err)=>console.log(err))
        
    },[match.params.id])
    return (
        <div>
        {posts.map(post=>(
            
           <div key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.email}</p>
          {/* <p>{post.body}</p> */}
          </div> 
        
        )
        
        )}

    </div>
)
}

export default Post
