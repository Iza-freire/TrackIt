import { useState, useEffect } from "react"
import * as C from "./style"
import Plus from "../../assets/img/plus.svg"
import useAuth from "../../hooks/useAuth"
import ListaDeHabitos from "./ListaDeHabitos"
import FormDosHabitos from "./FormDosHabitos"
import useProgress from "../../hooks/useProgress"
import api from "../../API'S/api"

export default function Habitos() {
  const { auth } = useAuth()
  const { updateProgress } = useProgress()
  const [habits, setHabits] = useState(null)
  const [formHabitosAberto, setFormHabitosAberto] = useState(false)

  
  function CarregarHabitos() {
    
    const promise = api.ApiHabitos(auth.token)
    promise.then((response) => {
      setHabits(response.data)
      loadhabitosDeHoje()
    })
    promise.catch((error) => {
      console.log(error.response)
    })
  }

  function loadhabitosDeHoje() {
    const promise = api.HabitosDeHoje(auth.token)

    promise.then((response) => {
      const doneHabits = response.data.filter(habit => habit.done)

      updateProgress(doneHabits.length, response.data.length)
    })
  }

  function handleDeleteHabit(id) {
    if (!window.confirm("Você tem certeza que deseja deletar este hábito?")) {
      return;
    }

    const promise = api.deleteHabit(id, auth.token);
    promise.then(() => {
      CarregarHabitos();
      loadhabitosDeHoje();
    })
  }
   useEffect(CarregarHabitos, [CarregarHabitos]);


  if (habits === null) {
    return <h1>Carregando...</h1>
  }

  return (
    <C.Container>
      <C.RegisterContent>
        <C.Title>Meus hábitos</C.Title>
        <C.Button onClick={() => setFormHabitosAberto(true)}>
          <img alt="plus.svg" src={Plus} />
        </C.Button>
      </C.RegisterContent>
      <FormDosHabitos
        isOpen={formHabitosAberto}
        closeForm={() => setFormHabitosAberto(false)}
        CarregarHabitos={CarregarHabitos}
      />
      <ListaDeHabitos habits={habits} handleDeleteHabit={handleDeleteHabit} />
    </C.Container>
  );
}