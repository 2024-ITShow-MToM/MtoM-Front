// import React, { createContext, useState } from 'react';

// export const MatchingContext = createContext();

// function MatchingProvider({ children }) {
//     const [field, setField] = useState("");
//     const [major, setMajor] = useState("");
//     const [advice, setAdvice] = useState("");

//     const saveField = (field) => {
//         setField(field);
//     }
//     const saveMajor = (major) => {
//         setMajor(major);
//     }
//     const saveAdvice = (advice) => {
//         setAdvice(advice);
//     }

//     return (
//         <MatchingContext.Provider value={{ field, saveField, major, saveMajor, advice, saveAdvice}}>
//             {children}
//         </MatchingContext.Provider>
//     )
// }

// export default MatchingProvider;

// import React, { createContext, useState } from 'react';

// export const MatchingContext = createContext();

// export const MatchingProvider = ({ children }) => {
//     const [worry, setWorry] = useState(null);
//     const [major, setMajor] = useState(null);
//     const [personal, setPersonal] = useState([]);

//     const saveWorry = (worry) => setWorry(worry);
//     const saveMajor = (major) => setMajor(major);
//     const savePersonal = (personal) => setPersonal(personal);

//     return (
//         <MatchingContext.Provider value={{ worry, saveWorry, major, saveMajor, personal, savePersonal }}>
//             {children}
//         </MatchingContext.Provider>
//     );
// };

import React, { createContext, useState } from 'react';

export const MatchingContext = createContext();

const MatchingProvider = ({ children }) => {
    const [worry, setWorry] = useState(null);
    const [major, setMajor] = useState(null);
    const [personal, setPersonal] = useState([]);

    const saveWorry = (worry) => setWorry(worry);
    const saveMajor = (major) => setMajor(major);
    const savePersonal = (personal) => setPersonal(personal);

    return (
        <MatchingContext.Provider value={{ worry, saveWorry, major, saveMajor, personal, savePersonal }}>
            {children}
        </MatchingContext.Provider>
    );
};

export default MatchingProvider;