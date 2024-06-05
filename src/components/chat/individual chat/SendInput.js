import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/SendInput.module.css';

import { BsSend } from 'react-icons/bs';

function SendInput({ sendMessage }) {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <input 
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <BsSend onClick={handleSend} />
            </div>
        </>
    )
}

export default SendInput;