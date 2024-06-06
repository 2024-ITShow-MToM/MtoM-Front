import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

function ProjectContext({ children }) {
    const [recruitmentStart, setRecruitmentStart] = useState('');
    const [recruitmentEnd, setRecruitmentEnd] = useState('');
    const [workStart, setWorkStart] = useState('');
    const [workEnd, setWorkEnd] = useState('');

    const recruitment = (start, end) => {
        setRecruitmentStart(start);
        setRecruitmentEnd(end);
    }

    const work = (start, end) => {
        setWorkStart(start);
        setWorkEnd(end);
    }

    return (
        <ProjectContext.Provider value={{ recruitmentStart, recruitmentEnd, workStart, workEnd, recruitment, work }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContext;