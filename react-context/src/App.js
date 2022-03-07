import './App.css';
import React from 'react';
import AuthUser from './Components/UserContext';
import Theme from './Components/Theme Context/Theme';
import Bootstrap from './Components/Bootstrap/Bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
     {/* <AuthUser /> 
     <Theme/> 
     <Bootstrap /> */}

     <h1>Store</h1>
     <nav>
       <Link to="/invoices">Invoices</Link> | {""}
       <Link to="/expenses">Expenses</Link> | {""}
       <Link to="/customers">Customers</Link>
     </nav>
    </div>
  );
}

export default App;
