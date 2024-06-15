import { createContext, useState } from "react";

export const InterviewContext = createContext();

function InterviewProvider({ children }) {
    const [title, setTitle] = useState(null);
    const [info, setInfo] = useState(null);

    const saveInterview = (title, info) => {
        setTitle(title);
        setInfo(info);
    }

    return (
        <InterviewContext.Provider value={{ title, info, saveInterview }}>
            {children}
        </InterviewContext.Provider>
    )
}

export default InterviewProvider;