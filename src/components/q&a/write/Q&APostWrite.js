import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOST } from '../../../config/Config';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&APostWrite.module.css';
import ImageBox from './ImageBox';
import QandAPostWriteInput from './Q&APostWriteInput';

function QandAPostWrite() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [img, setImg] = useState('');
    const userId = localStorage.getItem("userId"); // userId는 회원가입했을 때 아이디
    const [postData, setPostData] = useState({
        img: null,
        title: null,
        content: null,
        hashtags: tags
    });

    const register = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("userId", userId);
            formData.append("title", postData.title);
            formData.append("content", postData.content);
            formData.append("hashtags", JSON.stringify(postData.hashtags));
            formData.append("img", img);

            const request = await axios.post(`${HOST}/api/posts`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (request.status === 201) {
                console.log("게시글 업로드 성공");
                navigate('/q&a');
            } else {
                console.log("게시글 업로드 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <ImageBox setImg={setImg} />
                <QandAPostWriteInput setPostData={setPostData} tags={tags} setTags={setTags} />
                <div className={styles['button']}>
                    <button onClick={register}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default QandAPostWrite;