import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/chat/Chatting.module.css';

import ChattingList from './ChattingList';
import Search from './search/Search';
import Nav from '../common/Nav';

import { BiBell } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';

function Chatting() {
    const [showSearch, setShowSearch] = useState(false);

    const handlePlusClick = () => {
        setShowSearch(true);
    };

    return (
        <>
            {showSearch ? (
                <Search />
            ) : (
                <>
                    <div className={styles['container']}>
                        <BiBell />
                        <p>채팅</p>
                        <FiPlus style={{ color: '#FF6524' }} onClick={handlePlusClick} />
                    </div>
                    <div>
                        <ChattingList />
                    </div>
                </>
            )}
            <Nav />
        </>
    );
}

export default Chatting;