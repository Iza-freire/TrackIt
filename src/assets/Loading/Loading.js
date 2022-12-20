import styled from "styled-components"
import loading from "../img/loading.svg"

function Loading(){
    return(
        <ContaiverL>
        <DivCarregando>
            <img src={loading} alt="carregando"/>
        </DivCarregando>
        </ContaiverL>
    )
    

}
export default Loading

const DivCarregando = styled.div`
    width: 50%;
    height: 50%;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
    }
`
const ContaiverL = styled.div`
    background-color: #52B6FF; 
    justify-content: center;
    align-items: center;
`