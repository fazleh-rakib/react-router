import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import First from "./components/First/First.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetail from "./components/FriendDetail.jsx/FriendDetail.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";
// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
         path:'/',
         element : <First />
      },
      {
        path: 'friends',
        element: <Friends />,
        loader : ()=>fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail />,
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'posts',
        element : <Posts></Posts>,
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element : <PostDetail />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
