import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Join from './pages/Join';

import Home from './pages/Home';

import Alarm from './pages/Alarm';

import Interview from './pages/Interview'
import InterviewContent from './pages/InterviewContent'

import ProfileRegister from './pages/ProfileRegister';

import QandA from './pages/Q&A';
import QandAWrite from './pages/Q&AWrite';
import QandAQuestion from './pages/Q&AQuestion';

import Chatting from './pages/Chatting';
import IndividualChat from './pages/IndividualChat';
import GroupChat from './pages/GroupChat';

import Project from './pages/Project'
import ProjectRegister from './pages/ProjectRegister';
import RecruitmentPeriod from './pages/RecruitmentPeriod';
import WorkPeriod from './pages/WorkPeriod';
import ProjectApplication from './components/project/ProjectApplication'

import MatchingField from './pages/MatchingField'
import MatchingMajor from './pages/MatchingMajor'
import MatchingAdvice from './pages/MatchingAdvice'
import MatchingMento from './pages/MatchingMento'
import MatchingEnd from './pages/MatchingEnd'
import MatchingApplication from './pages/MatchingApplication'

import MentoRegister from './pages/MentoRegister';

import My from './pages/My';
import MyProfileEdit from './pages/MyProfileEdit';
import ProjectDetail from './components/project/detail/ProjectDetail';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Splash />}/>
                <Route path="/signin" element={<Login />}/>
                <Route path="/signup" element={<Join />}/>

                <Route path="/home" element={<Home />}/>

                <Route path='/alarm' element={<Alarm />}/>

                <Route path='/interview' element={<Interview />}/>
                <Route path='/interviewContent' element={<InterviewContent />}/>

                <Route path='/profile/register' element={<ProfileRegister />} />
                
                <Route path='/q&a' element={<QandA />} />
                <Route path='/q&a/write' element={<QandAWrite />} />
                <Route path='/q&a/question/:id' element={<QandAQuestion />} />

                <Route path='/chat' element={<Chatting/>} />
                <Route path='/chat/individual/:username' element={<IndividualChat />} />
                <Route path='/chat/group' element={<GroupChat />} />

                <Route path='/project' element={<Project />} />
                <Route path='/project/register' element={<ProjectRegister />} />
                <Route path='/project/recruitment-period' element={<RecruitmentPeriod />} />
                <Route path='/project/work-period' element={<WorkPeriod />} />
                <Route path='/project/detail/:id' element={<ProjectDetail />}/>
                <Route path='/project/projectApplication' element={<ProjectApplication />}/>

                <Route path='/mento/register' element={<MentoRegister />}/>

                <Route path='/matchingField' element={<MatchingField />}/>
                <Route path='/matchingMajor' element={<MatchingMajor />}/>
                <Route path='/matchingAdvice' element={<MatchingAdvice />}/>
                <Route path='/matchingMento' element={<MatchingMento />}/>
                <Route path='/matchingEnd' element={<MatchingEnd />}/>
                <Route path='/matchingApplication' element={<MatchingApplication />}/>

                <Route path='/mypage' element={<My />} />
                <Route path='/profile/edit' element={<MyProfileEdit />} />
            </Routes>
        </Router>
    )
}

export default App;