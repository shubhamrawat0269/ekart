import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const contexts = { loading, setLoading };

  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
