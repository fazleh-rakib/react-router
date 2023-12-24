import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name , email , phone,id} = friend
    return (
        <div className='friend'>
            <h2>Friend : {name}</h2>
            <p> Email : {email}</p>
            <p>Phone : {phone}</p>
            <p><Link to={`/friend/${id}`}> show me detaaails </Link></p>
        </div>
    );
};

export default Friend;