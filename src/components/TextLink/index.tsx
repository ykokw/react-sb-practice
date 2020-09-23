import React from "react";
import styled from 'styled-components/macro';

interface TextLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  bold?: boolean;
  color?: "blue" | "gray";
}

const StyledAnchorElement = styled.a<TextLinkProps>`
  color: ${({ color }) => color === "blue" ? "#61dafb" : "#ccc"};
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
`;

const TextLink: React.FC<TextLinkProps> = ({
  children,
  bold = false,
  color = "blue",
  ...rest
}) => (
  <StyledAnchorElement
    bold={bold}
    color={color}
    {...rest}
  >
    {children}
  </StyledAnchorElement>
);

export default TextLink;
