import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post
    return (
        <div className='post'>
            <h2>ID : {id}</h2>
            <h4>Title : {title}</h4>
            <Link to ={`/post/${id}`}>Details</Link>
            <Link to = {`/post/${id}`}><button>Show Post Details</button></Link>
        </div>
    );
};

export default Post;