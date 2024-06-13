import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

function ProjectProvider({ children }) {
    const [recruitmentStart, setRecruitmentStart] = useState('');
    const [recruitmentEnd, setRecruitmentEnd] = useState('');
    const [workStart, setWorkStart] = useState('');
    const [workEnd, setWorkEnd] = useState('');

    const [projectImg, setProjectImg] = useState(null);
    const [projectTitle, setProjectTitle] = useState(null);
    const [projectContent, setProjectContent] = useState(null);
    const [projectBackendCount, setProjectBackendCount] = useState(0);
    const [projectFrontendCount, setProjectFrontendCount] = useState(0);
    const [projectDesignCount, setProjectDesignCount] = useState(0);
    const [projectPromoterCount, setProjectPromoterCount] = useState(0);
    const [projectIntroduction, setProjectIntroduction] = useState(null);

    const recruitment = (start, end) => {
        setRecruitmentStart(start);
        setRecruitmentEnd(end);
    }

    const work = (start, end) => {
        setWorkStart(start);
        setWorkEnd(end);
    }

    const saveInfo = (img, title, content, backendCount, frontendCount, designCount, promoterCount, introduction) => {
        setProjectImg(img);
        setProjectTitle(title);
        setProjectContent(content);
        setProjectBackendCount(backendCount);
        setProjectFrontendCount(frontendCount);
        setProjectDesignCount(designCount);
        setProjectPromoterCount(promoterCount);
        setProjectIntroduction(introduction);
    }

    return (
        <ProjectContext.Provider value={{ recruitmentStart, recruitmentEnd, recruitment, workStart, workEnd, work, projectImg, projectTitle, projectContent, projectBackendCount, projectFrontendCount, projectDesignCount, projectPromoterCount, projectIntroduction, saveInfo }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider;