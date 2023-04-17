import  React ,{ useState, useContext  } from "react";
import { AuthContext } from "../contex";
import'./login.css';

const Login = () =>{
    const { setLogedin } = useContext(AuthContext);

    const [user, setUser] = useState({
        name: "",
        password: "",
      });
      
  const Authentication = () => {
    if (
      (user.name === "Achyutha" && user.password === "123456") 
      
    ) {
      setLogedin(true);
    } else {
      alert("Enter Proper Credentials");
    }
  };
    return(
        <>
        <div className="luffy">
            <div className="one-piece">
               
            <input type="text" placeholder="username" 
            onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
            </div>
            <br></br>
            <div>
            <input type="text" placeholder="Password" 
            onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
            </div>
            <br></br>
            <button 
            onClick={Authentication}
            >Login</button>
        </div>
       <div>
       <h2>username(Achyutha)paaswd(123456)</h2>
       </div>
       </>
     );

}

export default Login;