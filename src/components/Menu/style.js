import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 4;
  
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 22px;
  color: #52B6FF;
  margin: 0 36px;
`;

const ContentProgressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CircularProgressbarContainer = styled.div`
  width: 100px;
  height: 90px;
  position: absolute;
  top: -40px;
`;

export {
  Footer,
  StyledLink,
  ContentProgressbar,
  CircularProgressbarContainer
};