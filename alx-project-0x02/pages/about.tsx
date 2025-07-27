import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Radius" size="medium" shape="rounded-md" />
        <Button label="Large Pill" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;
