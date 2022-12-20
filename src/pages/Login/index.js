import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Loading from "../../assets/Loading/Loading";
import api from "../../API'S/api";
import Button from "../../components/Button";
import  Input  from "../../components/Input";




const Login = () => {
  const { login, auth } = useAuth();
  const navigate = useNavigate();

  const [infoUser, setInfoUser] = useState({ email: "", password: "" });
  const [carregandoInfo, setCarregandoInfo] = useState(false);

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/hoje");
    }
  }, [auth, navigate]);

    const handleChange = (evento) => {
    setInfoUser({ ...infoUser, [evento.target.name]: evento.target.value });
  }

   function handleSubmit(evento) {
    evento.preventDefault();

    setCarregandoInfo(true);
    const promise = api.ApiLogin({
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
          data-test="email-input"
          type="email"
          placeholder="Digite seu E-mail"
          name="email"
          value={infoUser.email}
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Input
          data-test="password-input"
          type="password"
          placeholder="Digite sua Senha"
          value={infoUser.password}
          name="password"
          onChange={handleChange}
          disabled={carregandoInfo}
          required
        />
        <Button data-test="login-btn" type="submit" disabled={carregandoInfo}>
          {
            carregandoInfo
              ? <Loading/>
              : "Entrar"
          }
        </Button>
      </C.Content>
          <C.LabelSignup data-test="signup-link">
           Não tem uma conta? 
          <Link data-test="signup-link" to="/cadastro">&nbsp;Cadastre</Link>
        </C.LabelSignup>
    
    </C.Container>
  );
};
   
export default Login;