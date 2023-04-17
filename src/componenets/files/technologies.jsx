import React from "react";
import { Link, Outlet } from "react-router-dom";
import './technologies.css'

const Technology =() => {
    return(
<div>
    <h2 style={{color: "green"}}>Technology</h2>

    <div className="Container">
      <div className="leftPanel">
        <Link to="html">HTML</Link>
        <Link to="css">CSS</Link>
        <Link to="javascript">Javascript</Link>
       
      </div>

      <div className="rightPanel">
        <Outlet />
      </div>
    </div>
    <p>
       
    </p>
</div>
    );
}
export default Technology;