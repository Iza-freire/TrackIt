import React from 'react';
import Semana from '../../../components/Semana';
import trashIcon from "../../../assets/img/dump.svg";
import styled from "styled-components";
import { Days, LinkS } from '../style';

function Habit({ id, name, days, handleDeleteHabit }) {
  return (
    <Container  data-test="habit-container">
      <Title data-test="habit-name">{name}</Title>
      <Days  data-test="habit-day" >
        {Semana.map(weekDay => (
          <LinkS key={weekDay.id} isSelected={days.includes(weekDay.id)}>{weekDay.day}</LinkS>
        ))}
      </Days>

      <img data-test="habit-delete-btn" alt="Trash" src={trashIcon} onClick={() => handleDeleteHabit(id)} />
    </Container>
  );
}

export default Habit;

export const Container = styled.div`
  width: 100%;
  height: 90px;

  padding: 15px;
  margin: 20px 0 10px 0;

  background: #FFFFFF;
  border-radius: 5px;

  position: relative;

  img {
    width: 15px;

    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

 const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;

  word-break: break-all;
  width: 80%;

  color: #666666;
`;
