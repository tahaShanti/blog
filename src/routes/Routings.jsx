import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Login from "../pages/Login/Login.jsx";
import AddPost from "../pages/AddPost/AddPost.jsx";
import AllPosts from "../pages/AllPosts/AllPosts.jsx";
import EditPost from "../pages/EditPost/EditPost.jsx";
import Protected from "../components/AuthLayout.jsx";
import Post from "../pages/Post/Post.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/signup"
        element={
          <Protected authentication={false}>
            <Signup />
          </Protected>
        }
      />
      <Route
        path="/login"
        element={
          <Protected authentication={false}>
            <Login />
          </Protected>
        }
      />
      <Route
        path="/add-post"
        element={
          <Protected authentication>
            <AddPost />
          </Protected>
        }
      />
      <Route
        path="/all-post"
        element={
          <Protected authentication>
            <AllPosts />
          </Protected>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <Protected authentication>
            <EditPost />
          </Protected>
        }
      />
      <Route path="/post/:slug" element={<Post />} />
    </Route>
  )
);

const Routings = () => {
  return <RouterProvider router={router} />;
};

export default Routings;
