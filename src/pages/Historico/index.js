import { useEffect } from "react";
import useProgress from "../../hooks/useProgress";
import useAuth from "../../hooks/useAuth";
import api from "../../API'S/api";
import styled from "styled-components";

export default function Historico() {

  const { auth } = useAuth();
  const { updateProgress } = useProgress();

  function loadhabitosDeHoje() {
    const promise = api.HabitosDeHoje(auth.token);

    promise.then((response) => {
      const doneHabits = response.data.filter(habit => habit.done);

      updateProgress(doneHabits.length, response.data.length);
    });
  }
   useEffect(loadhabitosDeHoje, [loadhabitosDeHoje]);

  return (
    <Container>
      <h5>Histórico</h5>
      <Subtitle>
      Em breve você poderá ver o histórico dos seus hábitos aqui!
      </Subtitle>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 18px;
  display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
  h5{
  font-size: 22px;
  line-height: 29px;
  padding-top: 70px;
  color: #126BA5; 
  }
`;
const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 22px;
  color: #BABABA;
`;