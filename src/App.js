import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/splash';
import Login from './pages/login';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Splash />}/>
              <Route path="/signin" element={<Login />}/>
          </Routes>
      </Router>
  )
}

export default App;