import React, { useState, useEffect, useContext } from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import Mento from "../components/home/Mento";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { MentorContext } from "../components/home/MentoProvider";

function FieldContainer() {
    const [selectedMentoIndex, setSelectedMentoIndex] = useState(0);
    const userId = useSelector(state => state.userId);
    const location = useLocation();
    const {mentor} = useContext(MentorContext);

    const handleMentoClick = (index) => {
        setSelectedMentoIndex(index);
    };

    console.log(mentor)

    const getMento = async () => {
        try {
            const mentorUserIds = mentor.map(mentor => mentor.userId);
            const mentorPromises = mentorUserIds.map(userId => axios.get(`${process.env.REACT_APP_HOST}/api/users/${userId}`));
            const mentorData = await Promise.all(mentorPromises);
            mentorData.forEach(data => {
                console.log("멘토 정보:",data.data);
            });
    
        } catch (error) {
            console.error("Failed to fetch mentor users:", error);
        }
    };
    
    useEffect(() => {
        getMento();
    }, []);

    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="최종 멘토 선택" subText={`${userId}님에게 딱 맞는 멘토 3명을 추려봤습니다!`} />
                <div className={styles['mento-container']}>
                    {mentor.map((mento, index) => (
                        <div className={styles['mento-item']} key={index}>
                            <Mento
                                name={mento.userId}
                                major={mento.major}
                                hashTag={mento.mentoring_topics}
                                infoText={mento.personal}
                                isSelected={selectedMentoIndex === index}
                                onClick={() => handleMentoClick(index)}
                            />
                        </div>
                    ))}
                </div>
                <NextButton text="다음" nextRoute="/matchingEnd" />
            </div>
        </div>
    );
}

export default FieldContainer;