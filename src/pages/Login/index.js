
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.svg";
import Loading from "../../Loading/Loading"
import api from "../../API'S/api";



const Login = () => {
  const { login, auth } = useAuth();
  const navigate = useNavigate();

  const [infoUser, setInfoUser] = useState({ email: "", password: "" });
  const [carregandoInfo, setCarregandoInfo] = useState(false);

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/hoje");
    }
  }, []);

    const handleChange = (evento) => {
    setInfoUser({ ...infoUser, [evento.target.name]: evento.target.value });
  }

   function handleSubmit(evento) {
    evento.preventDefault();

    setCarregandoInfo(true);
    const promise = api.login({
      ...infoUser
    });

    promise.then((response) => {
      setCarregandoInfo(false);
      login(response.data)
      navigate("/hoje");
    });
    promise.catch(() => {
      setCarregandoInfo(false);
      alert("Ocorreu um erro. Tente novamente.");
    });
  }
  console.log(infoUser)


  return (
    <C.Container>
      <img alt="logo.svg" src={Logo}/>
      <C.Content onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          name="email"
          value={infoUser.email}
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={infoUser.password}
          name="password"
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Button type="submit" disabled={carregandoInfo}>
          {
            carregandoInfo
              ? <Loading />
              : "Entrar"
          }
        </Button>
      </C.Content>
          <C.LabelSignup>
           Não tem uma conta? 
          <Link to="/signup">&nbsp;Cadastre</Link>
        </C.LabelSignup>
    
    </C.Container>
  );
};
   
export default Login;
