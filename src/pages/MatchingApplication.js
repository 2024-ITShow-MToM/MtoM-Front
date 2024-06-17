import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import Header from "../components/common/Header";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import MentoApplyModal from "../components/modals/MentoApplyModal";
import axios from "axios";
import { useSelector } from "react-redux";
import { MentorContext } from "../components/home/MentoProvider";

function MatchingApplication() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [application, setApplication] = useState("");
    const userId = useSelector(state => state.userId);
    const { selectedMentorId } = useContext(MentorContext);

    useEffect(() => {
        console.log("Selected Mentor ID:", selectedMentorId);
    }, [selectedMentorId]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleTextareaChange = (event) => {
        setApplication(event.target.value);
    };

    const MentoMatching = async () => {
        console.log(userId, selectedMentorId, application);
        try {
            const res = await axios.post(`${process.env.REACT_APP_HOST}/api/mentors`, {
                menteeId: userId,
                mentorId: selectedMentorId, 
                application: application
            });
            console.log("멘토 신청 성공:", res.data);
        } catch (error) {
            console.error("멘토 신청 오류:", error);
        }
    };

    const handleSubmit = async () => {
        await MentoMatching(); 
        openModal();
    };

    return (
        <div>
            <Header text="멘토멘티 신청" />
            <div className={styles['matching-container']}>
                <Text mainText="신청서 작성" subText="하고싶은말을 자유롭게 적어주세요. ( 멘토링 계획, 내용등 )" />
                <textarea
                    className={styles['application-input']}
                    value={application}
                    onChange={handleTextareaChange}
                ></textarea>
                <NextButton text="신청하기" onClick={handleSubmit} />
            </div>
            {isModalOpen && <MentoApplyModal onClose={closeModal} />}
        </div>
    );
}

export default MatchingApplication;
