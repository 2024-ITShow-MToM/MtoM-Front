import { createContext, useState } from "react";

export const InterviewContext = createContext();

function InterviewProvider({ children }) {
    const [title, setTitle] = useState(null);
    const [info, setInfo] = useState(null);
    const [profileImg, setProfileImg] = useState(null);
    const [episodeImg, setEpisodeImg] = useState(null);
    const [major, setMajor] = useState(null);
    const [name, setName] = useState(null);

    const saveInterview = (title, info, profileImg, episodeImg, major, name) => {
        setTitle(title);
        setInfo(info);
        setProfileImg(profileImg);
        setEpisodeImg(episodeImg);
        setMajor(major);
        setName(name);
    }

    return (
        <InterviewContext.Provider value={{ title, info, profileImg, episodeImg, major, name, saveInterview }}>
            {children}
        </InterviewContext.Provider>
    )
}

export default InterviewProvider;