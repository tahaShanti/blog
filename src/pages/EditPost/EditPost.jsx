import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../../components";
import appwriteBlogs from "../../appwrite/blogs";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteBlogs
        .getPost(slug)
        .then((post) => {
          // console.log(post);
          setPost(post);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : null;
}

export default EditPost;
