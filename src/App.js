import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Join from './pages/Join';
import ProfileRegister from './components/profile/ProfileRegister';
import QandA from './pages/Q&A';
import QandAWrite from './pages/Q&AWrite';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Splash />}/>
              <Route path="/signin" element={<Login />}/>
              <Route path="/signup" element={<Join />}/>
              <Route path='/profile-register' element={<ProfileRegister />} />
              
              <Route path='/q&a' element={<QandA />} />
              <Route path='/q&a/q&a-write' element={<QandAWrite />} />
          </Routes>
      </Router>
  )
}

export default App;