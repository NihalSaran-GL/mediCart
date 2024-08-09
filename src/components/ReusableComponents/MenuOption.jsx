import React from 'react';
import styled from 'styled-components';

// Define a styled button that accepts props
const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  border: ${(props) => props.border || 'none'};
   margin-left: ${(props) => props.marginLeft || 'none'};
   font-family: monospace;
 font-weight: ${(props) => props.fontWeight || 'none'};;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
    display:flex;
  &:hover {
    color: ${(props) => props.hoverColor || 'black'};
  }
`;

const CustomButton = ({
  onClick,
  children,
  fontSize,
  bgColor,
  color,
  border,
  marginLeft,
  hoverColor,
  fontWeight
}) => {
  return (
    <StyledButton
      onClick={onClick}
      fontSize={fontSize}
      bgColor={bgColor}
      color={color}
      border={border}
      fontWeight={fontWeight}
      hoverColor={hoverColor}
      marginLeft={marginLeft}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
