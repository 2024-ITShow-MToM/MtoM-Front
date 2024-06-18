import React, { useState } from 'react';
import Nav from "../components/common/Nav";
import styles from "../styles/home/Home.module.css";
import Header from "../components/home/Header";
import DataSort from "../components/home/Major";
import Mento from "../components/home/Mento";
import Text from "../components/home/Text";
import MentoList from "../components/home/MentoList";
import ChooseItem from "../components/home/interview/ChooseItem";
import ChooseContainer from "../components/home/interview/ChooseContainer";
import { useNavigate } from "react-router-dom";
import InterviewItem from "../components/home/InterviewItem";
import { Icon } from "@iconify/react";
import { InterviewData } from "../components/interview/InterviewData";
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

function Home() {
    const [major, setMajor] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('전체');
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);

    const location = useLocation();
    const { mentorId } = location.state || {};

    const handleNext = () => {
        navigate('/interview');
    };

    const handleMatching = () => {
        navigate('/matchingField');
    };

     
    const handleContainerClick = () => {

        navigate('/matchingApplication', { state: { mentorId } });
    };

    return (
        <>
            <Header />
            <div className={styles.imgContainer}>
                <img src="/images/HomeImg.png" alt="멘토멘티찾기" className={styles['home-img']} onClick={handleMatching} />
                <div className={styles.goBtn} onClick={handleMatching}>
                    <p>바로가기</p>
                    <Icon icon="uiw:swap-right" />
                </div>
            </div>
            <div className={styles['home-container']}>
                <Text text={`${userId}님에게 추천하는 멘토선배`} />
                <div className={styles['mento-container']}>
                    <DataSort setSelectedMajor={setSelectedMajor} />
                </div>
            </div>
            <div>
                <MentoList setMajor={setMajor} selectedMajor={selectedMajor} onClick={handleContainerClick}/>
            </div>
            <div className={styles['home-container']}>
                <div className={styles['interview-container']}>
                    <p className={styles['interview-text']}>interview</p>
                    <div className={styles['interview-more']}>
                        <Text text="졸업후 선배님들의 인터뷰" />
                        <div onClick={handleNext}>더보기</div>
                    </div>
                </div>
            </div>
            <ChooseContainer />
            <div className={styles['home-container']} style={{ marginBottom: "30vw" }}>
                <div className={styles['interview-box']}>
                    {InterviewData.slice(0, 2).map((data, index) => (
                        <InterviewItem key={index} data={data} />
                    ))}
                </div>
            </div>
            <Nav />
        </>
    );
}

export default Home;