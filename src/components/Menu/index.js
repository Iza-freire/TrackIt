
import { Link, useLocation } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import useProgress from "../../hooks/useProgress"
import { RemoverTopoEMeanu } from "../../App"
import styled from "styled-components";

export default function Menu() {
  const location = useLocation()
  const { progress } = useProgress()

  if (RemoverTopoEMeanu.includes(location.pathname)) {
    return null
  }
  return (
    <ContainerRodape  data-test="menu">
      <LinkS data-test="habit-link" to="/habitos">Hábitos</LinkS>
       <Progressbar>
        <DivCircularContainer>
          <Link data-test="today-link" to="/hoje">
            <CircularProgressbar
             value={progress}
              text={"Hoje"}
              background 
              backgroundPadding={7}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </DivCircularContainer>
      </Progressbar>

      <LinkS  data-test="history-link" to="/historico">Histórico</LinkS>
    </ContainerRodape>
  )
}


export const ContainerRodape = styled.footer`
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

const LinkS = styled(Link)`
  font-size: 18px;
  line-height: 22px;
  color: #52B6FF;
  margin: 0 36px;
`;

const Progressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DivCircularContainer = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  top: -35px;
  background-color: #fff;
  border-radius: 100px;
`;