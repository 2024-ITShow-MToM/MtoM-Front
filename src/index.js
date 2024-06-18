import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChattingProvider from './components/chat/ChattingProvider';
import ProjectProvider from './components/project/ProjectProvider';
import InterviewProvider from './components/home/InterviewProvider';
import MatchingProvider from './components/matching/MatchingProvider';
import MentorProvider from './components/home/MentoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChattingProvider>
      <ProjectProvider>
        <InterviewProvider>
          <MatchingProvider>
            <MentorProvider>
              <App />
            </MentorProvider>
          </MatchingProvider>
        </InterviewProvider>
      </ProjectProvider>
    </ChattingProvider>
  </Provider>
);