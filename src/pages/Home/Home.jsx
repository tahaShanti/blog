import React, { useState, useEffect } from "react";
import appwriteBlogs from "../../appwrite/blogs";
import { Container, PostCard } from "../../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteBlogs.getPosts()
      .then((response) => {
        // Check if the response contains the 'documents' field
        if (response && Array.isArray(response.documents)) {
          setPosts(response.documents);
        } else {
          console.error("Unexpected response format:", response);
          setPosts([]); // Handle unexpected response gracefully
        }
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
        setPosts([]); // Handle fetch error gracefully
      });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <Container>
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;
