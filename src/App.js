import logo from './logo.svg';
import React from 'react';
import ReactDom from 'react-dom';
import './App.css';


import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';



import Sidebar from './Components/Sidebar';
import Clients from './Components/pages/Clients';
import Dashboard from './Components/pages/Dashboard';
import Invoice from './Components/pages/Invoice';
import Leads from './Components/pages/Leads';
import Masters from './Components/pages/Masters';
import Settings from './Components/pages/Settings';
import Task from './Components/pages/Task';



function App() {
   return (
   <>
   <BrowserRouter>
   <Sidebar />
   <Routes>
      
      <Route path="/" element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/masters" element={<Masters />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/task"element={<Task />} />

   </Routes>
   
    </BrowserRouter>
    
   </>
   );
}
export default App;

