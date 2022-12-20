import React, { useState } from 'react';
import * as C from "./style";
import useAuth from '../../../hooks/useAuth';
import Semana from '../../../components/Semana';
import Loading from '../../../assets/Loading/Loading';
import api from '../../../API\'S/api';

function FormDosHabitos({ isOpen, closeForm, CarregarHabitos }) {
  const { auth } = useAuth();
  const [name, setName] = useState('');
  const [days, setDays] = useState([]);
  const [carregandoInfo, setcarregandoInfo] = useState(false);

  function handleCreateHabit(e) {
    e.preventDefault();

    if (days.length === 0) {
      alert("Pelo menos um dia precisa ser selecionado");
      return;
    }

    setcarregandoInfo(true);

    const promise = api.createHabit({ name, days }, auth.token);
    promise.then(() => {
      setcarregandoInfo(false);
      setName('');
      setDays([]);
      closeForm();
      CarregarHabitos();
    });
    promise.catch((error) => {
      setcarregandoInfo(false);
      console.log(error.response);
    });
  }

  function handleSelectDay(id) {
    const isDaySelected = days.includes(id);

    if (isDaySelected) {
      const newDays = days.filter(day => day !== id);
      setDays(newDays);
      return;
    }

    setDays([...days, id]);
  }

  return (
    <C.Form onSubmit={handleCreateHabit} isOpen={isOpen}>
      <C.Container>
        <C.Input
          placeholder="nome do hábito"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={carregandoInfo}
        />
        <C.Days disabled={carregandoInfo}>
          {Semana.map((weekDay) => (
            <Day
              key={weekDay.id}
              {...weekDay}
              isSelected={days.includes(weekDay.id)}
              handleSelectDay={handleSelectDay}
            />
          ))}
        </C.Days>
      </C.Container>

      <C.Footer>
        <C.CloseButton
          type="button"
          disabled={carregandoInfo}
          onClick={closeForm}
        >
          Cancelar
        </C.CloseButton>
        <C.SaveButton type="submit" disabled={carregandoInfo}>
          {
            carregandoInfo
              ? <Loading/>
              : "Salvar"
          }
        </C.SaveButton>
      </C.Footer>
    </C.Form>
  );
}

function Day({ day, id, isSelected, handleSelectDay }) {
  return (
    <C.LinkS
      onClick={() => handleSelectDay(id)}
      isSelected={isSelected}
    >
      {day}
    </C.LinkS>
  );
}

export default FormDosHabitos;