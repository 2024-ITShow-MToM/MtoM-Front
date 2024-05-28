import React, { createContext, useState } from 'react';
export const ProviderContext = createContext();

function PeriodProvider({ children }) {
    const [recruitmentStart, setRecruitmentStart] = useState(''); // 모집 기간 시작일
    const [recruitmentEnd, setRecruitmentEnd] = useState(''); // 모집 기간 마감일
    const [workStart, setWorkStart] = useState(''); // 작업 기간 시작일
    const [workEnd, setWorkEnd] = useState(''); // 작업 기간 마감일

    const recruitmentContact = (start, end) => {
        setRecruitmentStart(start);
        setRecruitmentEnd(end);
    }

    const workContact = (start, end) => {
        setWorkStart(start);
        setWorkEnd(end);
    }

    return (
        <ProviderContext.Provider value={{ recruitmentStart, recruitmentEnd, workStart, workEnd, recruitmentContact, workContact }}>
            {children}
        </ProviderContext.Provider>
    );
}

export default PeriodProvider;