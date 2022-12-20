import { useState, useEffect } from "react";
import { Container, Content } from "./style";
import useProgress from "../../hooks/useProgress";
import useAuth from "../../hooks/useAuth";
import Data from "../../components/ContainerHoje/Data";
import CardHabit from "../../components/ContainerHoje/CardHabit";
import StatusHabito from "../../components/ContainerHoje/StatusHabito"
import api from "../../API'S/api";

export default function Hoje() {
  
  const { auth } = useAuth();
  const { updateProgress } = useProgress();
  const [habits, setHabits] = useState(null);
  const [doneHabitsQuantity, setDoneHabitsQuantity] = useState(0);

  function loadhabitosDeHoje() {
    const promise = api.HabitosDeHoje(auth.token);

    promise.then((response) => {
      const apiHabits = response.data;
      setHabits(apiHabits);

      const doneHabits = apiHabits.filter(habit => habit.done)
      updateProgress(doneHabits.length, apiHabits.length)
      setDoneHabitsQuantity(doneHabits.length)
    });
  }

  useEffect(loadhabitosDeHoje, [auth.token, updateProgress]);

  if (habits === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Content>
        <Data/>

        <StatusHabito doneHabitsQuantity={doneHabitsQuantity} />
        {habits.map(habit => (
          <CardHabit
            key={habit.id}
            {...habit}
            loadhabitosDeHoje={loadhabitosDeHoje}
          />
        ))}
      </Content>
    </Container>
  );
}
