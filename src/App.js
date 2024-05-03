import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Join from './pages/Join';
import ProfileRegister from './pages/ProfileRegister';
import QandA from './pages/Q&A';
import QandAWrite from './pages/Q&AWrite';
import QandAQuestion from './pages/Q&AQuestion';
import Chatting from './pages/Chatting';
import IndividualChat from './pages/IndividualChat';
import GroupChat from './pages/GroupChat';
import ProjectRegister from './pages/ProjectRegister';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Splash />}/>
              <Route path="/signin" element={<Login />}/>
              <Route path="/signup" element={<Join />}/>
              <Route path='/profile/register' element={<ProfileRegister />} />
              
              <Route path='/q&a' element={<QandA />} />
              <Route path='/q&a/write' element={<QandAWrite />} />
              <Route path='/q&a/question' element={<QandAQuestion />} />

              <Route path='/chat' element={<Chatting/>} />
              <Route path='/chat/individual' element={<IndividualChat />} />
              <Route path='/chat/group' element={<GroupChat />} />

              <Route path='/project/register' element={<ProjectRegister />} />
          </Routes>
      </Router>
  )
}

export default App;