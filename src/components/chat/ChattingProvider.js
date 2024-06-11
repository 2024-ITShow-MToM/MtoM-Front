import React, { createContext, useState } from 'react';

export const ChattingContext = createContext();

function ChattingProvider({ children }) {
    const [receiverId, setReceiverId] = useState(null);

    const saveId = (receiverId) => {
        setReceiverId(receiverId);
    }

    return (
        <ChattingContext.Provider value={{ receiverId, saveId }}>
            {children}
        </ChattingContext.Provider>
    )
}

export default ChattingProvider;