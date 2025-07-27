// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";
import Button from "@/components/common/Button";

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const sizeStyles = {
    small: "padding: 4px 8px; font-size: 12px;",
    medium: "padding: 8px 16px; font-size: 14px;",
    large: "padding: 12px 20px; font-size: 16px;",
  };

  const shapeStyles = {
    "rounded-sm": "border-radius: 4px;",
    "rounded-md": "border-radius: 8px;",
    "rounded-full": "border-radius: 9999px;",
  };

  const style = `
    ${sizeStyles[size]} 
    ${shapeStyles[shape]} 
    background-color: #0070f3; 
    color: white; 
    border: none; 
    cursor: pointer;
    margin-right: 8px;
  `;

  return (
    <Button style={{ ...parseStyle(style) }} onClick={onClick}>
      {label}
    </Button>
  );
};

// Converts CSS string to style object
function parseStyle(styleStr: string): React.CSSProperties {
  return styleStr.split(";").reduce((styleObj, rule) => {
    const [prop, value] = rule.split(":").map(s => s.trim());
    if (prop && value) {
      const jsProp = prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      styleObj[jsProp] = value;
    }
    return styleObj;
  }, {} as React.CSSProperties);
}

export default Button;
