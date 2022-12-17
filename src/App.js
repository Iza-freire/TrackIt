import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import RoutesApp from "./routes";

import GlobalStyle from "./styles/GlobalStyle";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle/>
  </AuthProvider>
);

export default App;
