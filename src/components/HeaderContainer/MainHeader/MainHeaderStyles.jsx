import styled from "styled-components";

export const MainHeader = styled.nav`
  display: flex;
  width: 100%;
  height:50px;
  align-items:center;
  border-bottom: 1px solid #cccaca;
  word-spacing: -4px;
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.section`
  display:flex;
  align-item: center;
  margin-left:5px;
`;

export const CenterSection = styled.section`
  display: flex;
width: 1000px;
  margin-left:20px;
`;

export const MenuOption = styled.button`
  display: flex;
  //width: 900px;
  margin-left:20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size:20px;
  font-family: monospace;
  font-weight: bold;

  &:hover {
    color: tomato; 
  }
`;

export const RightSection = styled.section`
  display: flex;
  align-items: center;
//   margin-left: 800px;
  width:300px;
//   border: 1px solid red;
`;

export const CustomLink = styled.a`
    text-decoration:none;
    color:black;
    font-family:monospace;
    margin-left:15px;
    font-size:15px;
`;