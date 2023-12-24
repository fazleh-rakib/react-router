import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend =useLoaderData()
    // console.log(friend);
    return (
        <div>
            <h2>Evarythis about this person is hear</h2>
            <h2>Name : {friend.name}</h2>
            <p>Phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;