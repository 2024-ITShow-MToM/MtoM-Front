import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Mento from './Mento';
import styles from '../../styles/home/Home.module.css';
import { MentorContext } from './MentoProvider';

function MentoList({ setMajor, selectedMajor }) {
    const userId = useSelector(state => state.userId);
    const { setSelectedMentorId } = useContext(MentorContext);
    const [profileData, setProfileData] = useState({
        name: null,
        student_id: null,
        birthday: null,
        gender: null,
        phonenumber: null,
        major: null,
        mbti: null,
        skills: [],
        personal: null,
        imogi: null,
        mentoring_topics: null
    });
    const [mentoData, setMentoData] = useState([]);
    const navigate = useNavigate();

    const getMentoInfo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users`);
            if (Array.isArray(response.data)) {
                setMentoData(response.data);
                console.log(response.data);
                if (response.data.length > 0) {
                    setMajor(response.data[0].major);
                }
            } else {
                console.error("Unexpected response data format:", response.data);
                setMentoData([]);
            }
        } catch (error) {
            console.log("서버 연결 안댄ㅁ", error);
            setMentoData([]);
        }
    };

    useEffect(() => {
        getMentoInfo();
    }, []);

    const filteredMentoData = selectedMajor === '전체' ? mentoData : mentoData.filter(data => data.major === selectedMajor);

    const handleMentoClick = (mentorId) => {
        setSelectedMentorId(mentorId);
        navigate('/matchingApplication', { state: { mentorId } });
    };

    return (
        <div className={styles['mento-box']}>
            {filteredMentoData.map((data, index) => (
                <Mento
                    key={index}
                    isFirst={index === 0}
                    major={data.major}
                    profile={data.profile}
                    name={data.name}
                    hashTag={data.mentoring_topics}
                    infoText={data.personal}
                    mentorId={data.userId}
                    onClick={() => handleMentoClick(data.userId)}
                />
            ))}
        </div>
    );
}

export default MentoList;