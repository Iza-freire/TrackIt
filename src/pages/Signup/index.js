import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom/dist";


const Signup = () => {
  

  return (
    <C.Container>
      <img alt="logo.svg"/>
      <C.Content>
        <Input
          type="email"
          placeholder="email"
          name="email"
          
        />
        <Input
          type="password"
          placeholder="senha"
        />
        <Input
          type="text"
          placeholder="nome"
          name="name"
        
        />
        <Input
         required
          type="text"
          placeholder="foto"
         
         
        />
        <Button >Cadastrar
        </Button>
      </C.Content>
          <C.LabelSignin>
          Já tem uma conta?
          <Link to="/">&nbsp;Entre</Link>
        </C.LabelSignin>
    </C.Container>
  );
}
export default Signup