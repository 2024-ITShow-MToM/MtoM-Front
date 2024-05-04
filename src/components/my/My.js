import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/my/My.module.css';
import { Icon } from '@iconify/react';

import Info from './Info';
import MyProfile from './profile/MyProfile';
import MyPost from './post/MyPost';
import Nav from '../common/Nav';

function My() {
    const [selectedChoice, setSelectedChoice] = useState('프로필');
    const handleChoiceClick = (choiceType) => {
        setSelectedChoice(choiceType);
    };

    const renderContent = () => {
        switch (selectedChoice) {
            case '프로필':
                return <MyProfile percent='60'/>;
            case '게시물':
                return <MyPost />;
            // case '설정':
            //     return <QandAChooseList />;
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['icon']}>
                    <Icon icon='ant-design:setting-filled' />
                </div>
                <div className={styles['info']}>
                    <Info />
                    <Link to='/profile/register' style={{ textDecoration: 'none', color: 'black' }}>
                        <button>프로필 편집하기</button>
                    </Link>
                </div>
            </div>

            <div className={styles['select']}>
                <div className={styles['choiceItem']}>
                    <p className={selectedChoice === '프로필' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('프로필')}>프로필</p>
                    <p className={selectedChoice === '게시물' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('게시물')}>게시물</p>
                    <p className={selectedChoice === '설정' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('설정')}>설정</p>
                </div>
            </div>
            
            <div className={styles['change']}>
                {renderContent()}
            </div>

            <Nav />
        </>
    )
}

export default My;