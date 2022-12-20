import styled from "styled-components";

export const Form = styled.form`
  display: ${(props) => props.isOpen ? "initial" : "none"};

  width: 100%;
  height: 180px;

  margin-top: 20px;
  padding: 18px;

  background: #FFFFFF;
  border-radius: 5px; 
`;

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;

  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
    
  font-size: 20px;
  line-height: 25px;

  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  &::placeholder{
    color: #DBDBDB;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 15px;
`;

export const CloseButton = styled.button`
  width: 85px;
  height: 35px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: transparent;

  border-radius: 4.63636px;

  font-size: 15.976px;
  line-height: 20px;

  color: #52B6FF;

  border: none;
`;

export const SaveButton = styled.button`
  width: 84px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => props.disabled ? 0.7 : 1};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: #52B6FF;

  border-radius: 5px;

  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;

  border: none;
`;


export const LinkS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  
  padding-bottom: 2px;
  border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 25px;
  
  background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
  color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`;

export const Days = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 4px;
  
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
`;