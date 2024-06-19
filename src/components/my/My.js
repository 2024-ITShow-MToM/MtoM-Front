import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/my/My.module.css';
import { Icon } from '@iconify/react';

import Info from './Info';
import MyProfile from './profile/MyProfile';
import MyPost from './post/MyPost';
import Nav from '../common/Nav';
import Setting from './setting/Setting';

function My() {
    const [selectedChoice, setSelectedChoice] = useState('프로필');
    const handleChoiceClick = (choiceType) => {
        setSelectedChoice(choiceType);
    };

    const [data, setData] = useState([]);
    // const [imgData, setImgData] = useState('');
    const userId = useSelector(state => state.userId);
    useEffect(() => {
        async function fetData() {
            // 회원 정보 서버
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${userId}`);
                if (response.status === 200) {
                    console.log("회원 정보 불러오기 성공");
                    setData(response.data);
                    // 회원 이미지 서버
                    // try {
                    //     const imgResponse = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img/${userId}`);
                    //     if (imgResponse.status === 200) {
                    //         console.log("회원 프로필 이미지 불러오기 성공");
                    //         setImgData(imgResponse.data);
                    //     } else {
                    //         console.log("회원 프로필 이미지 불러오기 실패", imgResponse.status);
                    //     }
                    // } catch(error) {
                    //     console.log("서버 연결 실패", error);
                    // }
                } else {
                    console.log("회원 정보 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        fetData();
    }, []);

    const renderContent = () => {
        switch (selectedChoice) {
            case '프로필':
                return <MyProfile data={data}/>; 
            case '게시물':
                return <MyPost />;
            case '설정':
                return <Setting />;
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['icon']}>
                    <Icon icon='ant-design:setting-filled' />
                </div>
                <div className={styles['info']}>
                    <Info name={data.name} studentId={data.student_id} profileImg={data.profile} />
                    <button>프로필 편집하기</button>
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