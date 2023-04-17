
import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {
  const [logedin, setLogedin] = useState(false);
  return (
    <AuthContext.Provider value={{ logedin, setLogedin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProvider;