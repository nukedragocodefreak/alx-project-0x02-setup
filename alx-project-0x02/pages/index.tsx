
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content of the first card." },
    { title: "Card 2", content: "Here’s some different content for the second card." },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => setShowModal(true)} style={{ marginBottom: "16px" }}>
        Add Post
      </button>
      {posts.map((post, idx) => (
        <Card key={idx} title={post.title} content={post.content} />
      ))}
      {showModal && (
        <PostModal onClose={() => setShowModal(false)} onSave={handleAddPost} />
      )}
    </div>
  );
};

export default Home;
