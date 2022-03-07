import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Expenses from './Components/Router/Routes/Expenses';
import Invoices from './Components/Router/Routes/Invoices';
import Customers from './Components/Router/Routes/Customers';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/invoices" element={<Invoices/>}/>
      <Route path="/customers" element={<Customers/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);