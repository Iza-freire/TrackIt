import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 18px;
  display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
`;

export const RegisterContent = styled.div`
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

export const Days = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 4px;
  
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
`;

export const Title = styled.p`
  font-size: 22px;
  line-height: 29px;
  color: #126BA5;
`;

export const Button = styled.button`
  width: 40px;
  height: 35px;

  border: none;

  background-color: #52B6FF;
  border-radius: 5px;  
`;

export const LinkS = styled.div`
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding-bottom: 2px;
  border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
  background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
  color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`;
