import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/splash';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Splash />}/>
          </Routes>
      </Router>
  )
}

export default App;