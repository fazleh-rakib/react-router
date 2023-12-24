import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const { id, title, body, userId } = postDetail;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Details about your post : {id}</h2>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
