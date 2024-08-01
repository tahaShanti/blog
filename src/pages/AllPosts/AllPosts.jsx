import React, { useState, useEffect } from "react";
import appwriteBlogs from "../../appwrite/blogs";
import { Container, PostCard } from "../../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteBlogs.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default AllPosts;
