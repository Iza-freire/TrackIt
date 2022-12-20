
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
    <C.Container>
      <C.ContainerCard>
        <h2>{name}</h2>
        <C.Paragraph>
          Sequência atual:
          <C.CurrentSequence done={done}>
            {currentSequence} {formatDayText(currentSequence)}
          </C.CurrentSequence>
        </C.Paragraph>
        <C.Paragraph>
          Seu recorde:
          <C.HighestSequence currentSequenceIsHighest={currentSequenceIsHighest}>
            {highestSequence} {formatDayText(highestSequence)}
          </C.HighestSequence>
        </C.Paragraph>
      </C.ContainerCard>

      <C.CheckMarkContainer
        done={done}
        onClick={handleCheckHabit}
      >
        <img alt="check.svg" src={Check} />
      </C.CheckMarkContainer>
    </C.Container>
  );
}
export default CardHabit