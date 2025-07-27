import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({title, content}) =>{
return(
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    );
};

export default Card;