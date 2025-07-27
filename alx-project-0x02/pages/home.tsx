// pages/home.tsx
import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here's some different content for the second card." />
      <Card title="Card 3" content="You can reuse this component anywhere!" />
    </div>
  );
};

export default Home;
