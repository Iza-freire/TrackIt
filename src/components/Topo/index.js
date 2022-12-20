import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo2.svg";
import useAuth from "../../hooks/useAuth";
import { RemoverTopoEMeanu } from "../../App";
import styled from "styled-components";


export default function Topo(){
    
  const navigate = useNavigate();
  const { auth } = useAuth();
  const location = useLocation();

  if (RemoverTopoEMeanu.includes(location.pathname)) {
    return null;
  }

    return (
    <ContainerTopo data-test="header">
      <img src={logo} alt="TrackIt" onClick={() => navigate("/hoje")} />
      <ImagemUser src={auth.image} alt={auth.name} />
    </ContainerTopo>
  );
    
}


const ContainerTopo = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    z-index: 2;
    img{
      background-color: #126BA5;
    }

`
const ImagemUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;