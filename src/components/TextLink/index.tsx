import React from "react";

interface TextLinkProps {
  bold?: boolean;
  color?: "blue" | "gray";
}

const TextLink: React.FC<JSX.IntrinsicElements["a"] & TextLinkProps> = ({
  children,
  bold = false,
  color = "blue",
  ...rest
}) => (
  <a
    style={{
      color: color === "blue" ? "#61dafb" : "#ccc",
      fontWeight: bold ? "bold" : "normal",
    }}
    {...rest}
  >
    {children}
  </a>
);

export default TextLink;
