import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { MobileView } from 'react-device-detect'

import Splash from './pages/Splash';
import Login from './pages/Login';
import Join from './pages/Join';
import ProfileRegister from './components/profile/ProfileRegister';
import QandA from './pages/Q&A';

function App() {
  return(
        // <MobileView>
        //     <Router>
        //         <Routes>
        //             <Route path="/" element={<Splash />}/>
        //             <Route path="/signin" element={<Login />}/>
        //             <Route path="/signup" element={<Join />}/>
        //             <Route path='/profile-register' element={<ProfileRegister />} />
        //             <Route path='/q&a' element={<QandA />} />
        //         </Routes>
        //     </Router>
        // </MobileView>

        <Router>
            <Routes>
                <Route path="/" element={<Splash />}/>
                <Route path="/signin" element={<Login />}/>
                <Route path="/signup" element={<Join />}/>
                <Route path='/profile-register' element={<ProfileRegister />} />
                <Route path='/q&a' element={<QandA />} />
            </Routes>
        </Router>
  )
}

export default App;