import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import CustomProvider from './componenets/contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProvider>

<BrowserRouter>
    <App />
    </BrowserRouter>

  </CustomProvider>
   


);

