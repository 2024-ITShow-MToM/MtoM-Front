import React, { useState } from "react";
import Header from "../components/common/Header";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import MentoApplyModal from "../components/modals/MentoApplyModal"

function MatchingApplication() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header text="멘토멘티 신청"/>
            <div className={styles['matching-container']}>
                <Text mainText="신청서 작성" subText="하고싶은말을 자유롭게 적어주세요. ( 멘토링 계획, 내용등 )"/>
                <textarea className={styles['application-input']}></textarea>
                <NextButton text="신청하기" onClick={openModal} />
            </div>
            {isModalOpen && <MentoApplyModal onClose={closeModal} />}
        </div>
    );
}

export default MatchingApplication;
