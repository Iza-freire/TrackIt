
import Check from "../../../assets/img/check.svg";
import * as C from "./style";
import useAuth from "../../../hooks/useAuth";
import api from "../../../API'S/api";


const CardHabit = ({
  name, id, done, currentSequence, highestSequence, loadhabitosDeHoje}) =>{
  
    const { auth } = useAuth();
  const currentSequenceIsHighest = currentSequence > 0 && currentSequence === highestSequence;

  function formatDayText(quantity) {
    if (quantity === 1) return 'dia';

    return 'dias';
  }

  function handleCheckHabit() {
    if (done) {
      const promise = api.uncheckHabit(id, auth.token);
      promise.then(() => {
        loadhabitosDeHoje();
      });

      return;
    }

    const promise = api.checkHabit(id, auth.token);
    promise.then(() => {
      loadhabitosDeHoje();
    });
  }

  return (
    <C.Container data-test="today-habit-container" >
      <C.ContainerCard data-test="today-habit-name">
        <h2>{name}</h2>
        <C.Paragraph data-test="today-habit-sequence" >
          Sequência atual:
          <C.CurrentSequence done={done} data-test="today-habit-sequence" >
            {currentSequence} {formatDayText(currentSequence)}
          </C.CurrentSequence>
        </C.Paragraph>
        <C.Paragraph data-test="today-habit-sequence" >
          Seu recorde:
          <C.HighestSequence data-test="today-habit-sequence"  currentSequenceIsHighest={currentSequenceIsHighest}>
            {highestSequence} {formatDayText(highestSequence)}
          </C.HighestSequence>
        </C.Paragraph>
      </C.ContainerCard>

      <C.CheckMarkContainer
        data-test="today-habit-check-btn"
        done={done}
        onClick={handleCheckHabit}
      >
        <img data-test="today-habit-check-btn" alt="check.svg" src={Check} />
      </C.CheckMarkContainer>
    </C.Container>
  );
}
export default CardHabit