import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "16px",
      backgroundColor: "#fff"
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p style={{ fontStyle: "italic", fontSize: "14px", color: "#555" }}>
        Posted by User #{userId}
      </p>
    </div>
  );
};

export default PostCard;
