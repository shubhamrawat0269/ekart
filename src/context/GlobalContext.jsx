import { createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const name = "Kamla Rawat";
  const contexts = { name };

  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
