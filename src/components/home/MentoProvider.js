import React, { createContext, useState } from 'react';

export const MentorContext = createContext();

function MentorProvider({ children }) {
    const [selectedMentorId, setSelectedMentorId] = useState(null);
    const [mentor, setMentor] = useState('null');

    return (
        <MentorContext.Provider value={{ selectedMentorId, setSelectedMentorId, mentor, setMentor }}>
            {children}
        </MentorContext.Provider>
    );
};

export default MentorProvider;