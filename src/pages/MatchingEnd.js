import React, {useState, useEffect, useContext} from "react";
import Header from "../components/common/Header";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import Mento from "../components/home/Mento";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MentorContext } from "../components/home/MentoProvider";

function MatchingEnd() {
    const location = useLocation();
    const { selectedMento } = location.state || {};
    const userId = useSelector(state => state.userId);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()
    const { setSelectedMentorId } = useContext(MentorContext);

    console.log("받아온 멘토 정보:", selectedMento);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const res = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${userId}`);
            console.log("유저 정보:", res.data);
            setUserInfo(res.data);
        };

        fetchUserInfo();
    }, [userId]);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const handleMentoClick = (mentorId) => {
        setSelectedMentorId(mentorId)
        navigate('/matchingApplication', { state: { mentorId } });
    };
    
    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <Text mainText="매칭 완료!" subText="매칭된 멘토멘티와 유익한 활동을 응원 합니다!"/>
                <div className={styles['matching-box']}>
                    <Mento 
                        profile={selectedMento.profile}
                        name={selectedMento.userId}
                        major={selectedMento.major}
                        hashTag={selectedMento.mentoring_topics}
                        infoText={selectedMento.personal}
                    />
                    <hr className={styles['line-style']}/>
                    {userInfo && (
                        <Mento 
                            profile={userInfo.profile}
                            name={userInfo.userId}
                            major={userInfo.major}
                            hashTag={userInfo.mentoring_topics}
                            infoText={userInfo.personal}
                        />
                    )}
                </div>
                <NextButton text="신청하기" onClick={() => handleMentoClick(selectedMento.userId)}/>
            </div>
        </div>
    );
}

export default MatchingEnd;