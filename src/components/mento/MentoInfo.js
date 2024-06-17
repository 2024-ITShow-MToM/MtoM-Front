import '../../styles/common/Style.css';
import styles from '../../styles/mento/MentoInfo.module.css';
import axios from 'axios';
import React, {useEffect, useSelector, useState} from 'react';

function MentoInfo() {
    // const userId = useSelector(state => state.userId);
    // const [profileData, setProfileData] = useState({
    //     name: null,
    //     student_id: null,
    //     birthday: null,
    //     gender: null,
    //     phonenumber: null,
    //     major: null,
    //     mbti: null,
    //     skills: [],
    //     personal: null,
    //     imogi: null,
    //     mentoring_topics: null
    // });

    // const getMentoInfo = async () => {
    //     console.log("잘돼요")
    //     try {
    //         const req = {
    //             userId: userId,
    //             name: profileData.name,
    //             student_id: parseInt(profileData.student_id),
    //             major: profileData.major,
    //             mentoring_topics: profileData.mentoring_topics

    //         }
    //         console.log(req)
    //         const response = await axios.post(`${process.env.REACT_APP_HOST}/mentors`, {
    //             userId: userId,
    //             name: profileData.name,
    //             student_id: parseInt(profileData.student_id),
    //             major: profileData.major,
    //             mentoring_topics: profileData.mentoring_topics
    //         });
    //         if (response.status === 200) {
    //             console.log("이거지요!");
    //         } else {
    //             console.log("안댐", response.status);
    //         }
    //     } catch(error) {
    //         console.log("서버 연결 안댄ㅁ", error);
    //     }
    // }
    // useEffect(() => {
    //     getMentoInfo()

    // },[])
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}>
                    <img src='/images/example.png' />
                </div>
                <div className={styles['info']}>
                    <div className={styles['personInfo']}>
                        <p>웹솔루션과</p>
                        <p>3413 최보람</p>
                    </div>
                    <p>안녕하세요! 친절한 후배들과 멘토링 진행 하고 싶어요</p>
                </div>
            </div>
        </>
    )
}

export default MentoInfo;