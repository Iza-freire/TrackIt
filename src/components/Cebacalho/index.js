import logo2 from "../../img/logo2.png"
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";




export default function Cabecalho(){
    
    const { auth } = useAuth();

    return (
    <Container>
      <img src={logo2} alt="TrackIt" />
      <ImagemUser src={auth.image} alt={auth.name} />
    </Container>
  );
    
}


const Container = styled.div`
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
  margin-right: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;