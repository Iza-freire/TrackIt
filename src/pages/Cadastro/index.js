import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as C from "./styled";
import Logo from "../../assets/img/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../assets/Loading/Loading";
import api from "../../API'S/api";


const Cadastro = () => {
  
  const [infoUser, setInfoUser] = useState({ name: "", email: "", password: "", image: "" });
  const [carregandoInfo, setCarregandoInfo] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evento) => {
    setInfoUser({ ...infoUser, [evento.target.name]: evento.target.value });
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    setCarregandoInfo(true);
    const promise = api.ApisignUp({
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
           data-test="email-input"
          type="email"
          placeholder="email"
          name="email"
          value={infoUser.email}
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          data-test="password-input"
          type="password"
          placeholder="senha"
          value={infoUser.password}
          name="password"
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          data-test="user-name-input"
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
         data-test="user-image-input"
          type="text"
          placeholder="foto"
          name="image"
          value={infoUser.image}
          onChange={handleChange}
          disabled={carregandoInfo}
         
        />
        <Button data-test="signup-btn" type="submit" disabled={carregandoInfo}>
          {
            carregandoInfo
              ? <Loading/>
              : "Cadastrar"
          }
        </Button>
      </C.Content>
          <C.LabelSignin>
          Já tem uma conta?
          <Link data-test="login-link"  to="/">&nbsp;Entre</Link>
        </C.LabelSignin>
    </C.Container>
  );
}

export default Cadastro;