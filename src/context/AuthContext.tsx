import { createContext, useContext, useState, type ReactNode } from "react";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const toggleAuthentication = () => {
    setAuthenticated((prev) => (prev === false ? true : false));
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("something worng");
  }

  return context;
};
