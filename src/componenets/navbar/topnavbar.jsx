import React, { useContext } from "react";
import './tnb.css'
import { AuthContext } from "../contex";
import {Link , useNavigate } from "react-router-dom";



const Navbar =() => {
    const navigate = useNavigate();
    const{setLogedin}=useContext(AuthContext);
    return(
   <div className="narutouzumaki">
    <div id="title" >
   <h2 >Navbar</h2>
   </div>
    <div id="menucomp">
    
        <p><Link to="/">Home</Link></p>  
        
           <p>   <Link to="/product">product</Link></p>   
        
      
         <p> <Link to="/technologies">technologies</Link></p> 
      
      

        <button
        onClick={()=>{
            setLogedin(false);
            navigate('/');
        }
        }
        >Logout Achyutha</button>
       
        
    </div>
</div>
    );
}
export default Navbar;