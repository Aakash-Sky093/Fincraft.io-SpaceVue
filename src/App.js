
import './App.css';
import Login from './component/Login/login';
import Dashboard from './component/Dashboard/Dashboard';

import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
<Routes>
      
        <Route path="/" element = {<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      
</Routes>
    </div>
  );
}

export default App;
