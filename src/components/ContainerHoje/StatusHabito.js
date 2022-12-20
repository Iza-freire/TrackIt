import React from 'react';
import styled from 'styled-components';
import useProgress from '../../hooks/useProgress';

function StatusHabito({ doneHabitsQuantity }) {
  const { progress } = useProgress();

  return (
    <HabitoParagrafo doneHabitsQuantity={doneHabitsQuantity}>
      {
        doneHabitsQuantity === 0
          ? "Nenhum hábito concluído ainda"
          : `${progress.toFixed(0)}% dos hábitos concluídos`
      }
    </HabitoParagrafo>
  );
}

const HabitoParagrafo = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 28px;
  color: ${(props) => props.doneHabitsQuantity !== 0 ? "#8FC549" : "#BABABA"};
`;

export default StatusHabito;