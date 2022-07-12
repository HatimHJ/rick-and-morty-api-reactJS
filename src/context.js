import React, { useContext, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [filter, setFilter] = useState({ status: "", gender: "", species: "" });
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <GlobalContext.Provider
      value={{ setFilter, filter, pageNumber, setPageNumber }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
