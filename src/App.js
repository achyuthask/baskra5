
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/navbar/topnavbar';
import Home from './componenets/files/home';
import { useContext } from 'react';
import { AuthContext } from './componenets/contex';
import Login from './componenets/logincomp/login';
import Product from './componenets/files/product';
import Technology from './componenets/files/technologies';
import Html from './componenets/files/techfiles/html';
import Css from './componenets/files/techfiles/css';
import Javascript from './componenets/files/techfiles/javascript';
import PageNotFound from './componenets/pagemotfound';

function App() {

  const {logedin} = useContext(AuthContext);
  return (
    <div className="App">

{logedin ? (
  <div>
  <Navbar />
  <Routes>
    <Route path='/'   element={<Home />} />
    <Route path='/product'   element={<Product />} />
    <Route path='/technologies'   element={<Technology />} >
      <Route path=''   element={<Navigate to ="html" />} />
      <Route path='html'   element={<Html />} />
      <Route path='css'   element={<Css />} />
      <Route path='javascript'   element={<Javascript />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
  </div>
) : (
  <Login />
)}
</div>
  );
}

export default App;



