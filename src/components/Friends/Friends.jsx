import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData()
    // console.log(friends);
    return (
        <div>
             <h2>friends : {friends.length}</h2>
             <div className='friends'>
                {
                    friends.map(friend => <Friend 
                    key={friend.id}
                    friend={friend}
                    />)
                }
             </div>
        </div>
    );
};

export default Friends;