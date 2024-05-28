import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&A.module.css';

import QandASearch from './Q&ASearch';
import QandAPostList from './Q&APostList';
import QandAChooseList from './Q&AChooseList';
import QandASearchList from './Q&ASearchList';
import Nav from '../common/Nav';
import WriteButton from './WriteButton';
import QandAHotList from './Q&AHotList';

function QandA() {
    const [selectedChoice, setSelectedChoice] = useState('전체');
    const [searchMode, setSearchMode] = useState(false);
    const [postData, setPostData] = useState([]);
    const [chooseData, setChooseData] = useState([]);

    const handleChoiceClick = (choiceType) => {
        setSelectedChoice(choiceType);
        setSearchMode(false);
    };

    const handleSearch = () => {
        setSearchMode(true);
    };

    const renderContent = () => {
        if (searchMode) {
            return postData.length >= 0 || chooseData.length >= 0 ? (
                <QandASearchList postData={postData} chooseData={chooseData} />
            ) : (
                console.log("검색 결과 없음")
            );
        }

        switch (selectedChoice) {
            case '전체':
                return <QandAHotList />;
            case '양자택일':
                return <QandAChooseList />;
            case '게시판':
                return <QandAPostList />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <QandASearch onSearch={handleSearch} setPostData={setPostData} setChooseData={setChooseData} />

                <div className={styles['body']} style={{ top : searchMode ? '0' : '5%'}}>
                    {!searchMode && (
                        <div className={styles['choiceItem']}>
                            <p className={selectedChoice === '전체' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('전체')}>전체</p>
                            <p className={selectedChoice === '게시판' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('게시판')}>게시판</p>
                            <p className={selectedChoice === '양자택일' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('양자택일')}>양자택일</p>
                        </div>
                    )}

                    <div className={styles['change']}>
                        {renderContent()}
                    </div>
                </div>

                <div className={styles['writeButton']} style={{ bottom : searchMode ? '34%' : '40%'}}>
                    <WriteButton />
                </div>
                <Nav />
            </div>
        </>
    )
}

export default QandA;