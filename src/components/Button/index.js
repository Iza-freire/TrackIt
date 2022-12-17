import styled from "styled-components";

const Button = styled.button`
  width: 305px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #52B6FF;
  border-radius: 4.6px;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  cursor: pointer;
  
`;

export default Button;