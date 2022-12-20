import dayjs from 'dayjs';
import ptBr from "dayjs/locale/pt-br";
import styled from "styled-components";

export default function Data() {
  let now = dayjs()
  let date = now.date()
  let month = dayjs().month() + 1;
  let DataCorreta = dayjs(now).locale(ptBr).format('dddd');

  return (
    <ContainerData>{DataCorreta}, {date}/{month}</ContainerData>
  )
}

const ContainerData = styled.p`
  padding-top: 100px;
  font-size: 23px;
  line-height: 29px;
  margin-bottom: 20px;
  color: #126BA5;
`;
