/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();
const ResContext = createContext();
const UbiContext = createContext();

export function UserContext({ children }) {
  const [usuario, setUsuario] = useState(null);
  const actualizarUsuario = (nuevoUser) => {
    setUsuario(nuevoUser);
  };

  const [res, setRes] = useState(null);
  const actualizarRes = (nuevoRes) => {
    setRes(nuevoRes);
  };

  const [ubi, setUbi] = useState(null);
  const actualizarUbi = (nuevoUbi) => {
    setUbi(nuevoUbi);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarUsuario }}>
      <ResContext.Provider value={{ res, actualizarRes }}>
        <UbiContext.Provider value={{ ubi, actualizarUbi }}>
          {children}
        </UbiContext.Provider>
      </ResContext.Provider>
    </UsuarioContext.Provider>
  );
}

export const useUsuarioContext = () => {
  return useContext(UsuarioContext);
};

export const useResContext = () => {
  return useContext(ResContext);
};

export const useUbiContext = ()=>{
    return useContext(UbiContext)
}