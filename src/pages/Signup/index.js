import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.svg";
import Loading from "../../Loading/Loading"
import api from "../../API'S/api";


const Signup = () => {
  
  const [infoUser, setInfoUser] = useState({ name: "", email: "", password: "", image: "" });
  const [carregandoInfo, setCarregandoInfo] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evento) => {
    setInfoUser({ ...infoUser, [evento.target.name]: evento.target.value });
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    setCarregandoInfo(true);
    const promise = api.signUp({
      ...infoUser
    });

    promise.then(() => {
      setCarregandoInfo(false);
      alert("Usuário cadastrado");
      navigate("/");
    });
    promise.catch(() => {
      setCarregandoInfo(false);
      alert("Ocorreu um erro. Tente novamente.");
    });
  }
console.log(infoUser)
  return (
    <C.Container>
      <img alt="logo.svg" src={Logo} />
      <C.Content onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={infoUser.email}
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          value={infoUser.password}
          name="password"
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleChange}
          value={infoUser.name}
          disabled={carregandoInfo}
          required
        />
        <Input
         required
          type="text"
          placeholder="foto"
          name="image"
          value={infoUser.image}
          onChange={handleChange}
          disabled={carregandoInfo}
         
        />
        <Button type="submit" disabled={carregandoInfo}>
          {
            carregandoInfo
              ? <Loading />
              : "Cadastrar"
          }
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