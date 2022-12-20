import { createContext, useState } from "react";

const ProviderProgresso = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState('');

  function updateProgress(progressed, total) {
    if (total === 0) {
      setProgress(0);
      return;
    }

    setProgress((progressed / total) * 100);
  }

  return (
    <ProviderProgresso.Provider value={{ progress, updateProgress }}>
      {children}
    </ProviderProgresso.Provider>
  )
}

export default ProviderProgresso;