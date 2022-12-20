import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Menu from "./components/Menu";
import { AuthProvider } from "./contexts/AuthContext";
import { ProgressProvider } from "./contexts/PercentageContext";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import GlobalStyle from "./style/GlobalStyle";

export const RemoverTopoEMeanu = ['/', '/cadastro'];

const App = () => {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
        <GlobalStyle/>
          <Topo data-test="header"/>
          <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/habitos" element={<Habitos/> } />
            <Route path="/hoje" element={<Hoje/>} />
            <Route path="/historico" element={ <Historico/> } />
          </Routes>
          <Menu data-test="menu"/>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}
export default App