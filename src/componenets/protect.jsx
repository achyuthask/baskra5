import { useContext } from "react";
import { AuthContext } from "./contex";
import { Navigate } from "react-router-dom";

function Protect({ children }) {
  const { logedin } = useContext(AuthContext);
  if ( logedin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default Protect;