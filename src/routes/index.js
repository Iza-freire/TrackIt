
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Hoje from "../pages/Hoje";
import styled from "styled-components";


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<Login/>} />
          <Route  path="/hoje" element={<Hoje/>} />
          <Route  path="/signup" element={<Signup/>} />
   
        </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
