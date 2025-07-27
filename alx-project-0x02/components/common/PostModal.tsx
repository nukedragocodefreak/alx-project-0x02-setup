import React, { useState } from "react";

interface PostModalProps {
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "400px"
      }}>
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "12px" }}>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button type="submit" style={{ marginRight: "8px" }}>Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
