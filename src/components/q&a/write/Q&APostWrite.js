import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&APostWrite.module.css';
import ImageBox from './ImageBox';
import QandAPostWriteInput from './Q&APostWriteInput';

function QandAPostWrite() {
    const [tags, setTags] = useState([]);
    const userId = localStorage.getItem("userId"); // userId는 회원가입했을 때 아이디
    const [postData, setPostData] = useState({
        img: null,
        title: null,
        content: null,
        hashtags: tags
    });

    const register = () => {
        console.log(postData);
    }

    return (
        <>
            <div className={styles['container']}>
                <ImageBox setPostData={setPostData} />
                <QandAPostWriteInput setPostData={setPostData} tags={tags} setTags={setTags} />
                <div className={styles['button']}>
                    <button onClick={register}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default QandAPostWrite;