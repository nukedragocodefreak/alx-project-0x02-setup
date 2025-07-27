import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header style={{
      padding: "16px",
      backgroundColor: "#f1f1f1",
      marginBottom: "24px",
      borderBottom: "1px solid #ccc"
    }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
