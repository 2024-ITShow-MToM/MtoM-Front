import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AWrite.module.css';

import Header from '../common/Header';
import QandAPostWrite from './Q&APostWrite';
import QandAChooseWrite from './Q&AChooseWrite';

function QandAWrite() {
    const [activeSection, setActiveSection] = useState('post');
    const handleClick = (section) => {
        setActiveSection(section);
    };

    const bodyRender = () => {
        switch(activeSection) {
            case 'post' :
                return <QandAPostWrite />;
            case 'choose' :
                return <QandAChooseWrite />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <Header text='Q&A 작성'/>

                <div className={styles['select']}>
                    <div className={`${styles['textDiv']} ${activeSection === 'post' ? styles['clicked'] : styles['default']}`} onClick={() => handleClick('post')}>
                        <p>게시물</p>
                        {activeSection === 'post' && <hr />}
                    </div>
                    <div className={`${styles['textDiv']} ${activeSection === 'choose' ? styles['clicked'] : styles['default']}`} onClick={() => handleClick('choose')}>
                        <p>양자택일</p>
                        {activeSection === 'choose' && <hr />}
                    </div>
                </div>
                
                <div className={styles['body']}>
                    <div className={styles['bodyDiv']}>
                        {bodyRender()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAWrite;