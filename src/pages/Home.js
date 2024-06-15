import Nav from "../components/common/Nav";
import styles from "../styles/home/Home.module.css"
import Header from "../components/home/Header";
import Major from "../components/home/Major"
import Mento from "../components/home/Mento";
import Text from "../components/home/Text";
import MentoList from "../components/home/MentoList";
import ChooseItem from "../components/home/interview/ChooseItem";
import ChooseContainer from "../components/home/interview/ChooseContainer";
import { useNavigate } from "react-router-dom";
import InterviewItem from "../components/home/InterviewItem";
import { Icon } from "@iconify/react";
import { InterviewData } from "../components/interview/InterviewData";

function Home() {

    const navigate = useNavigate();


    const handleNext = () => {
        navigate('/interview');
    };

    const handleMatching = () => {
        navigate('/matchingField');
    };

    return (
        <>
            <Header />
            <div className={styles.imgContainer}>
                <img src="/images/HomeImg.png" alt="멘토멘티찾기" className={styles['home-img']} onClick={handleMatching}/>
                <div className={styles.goBtn} onClick={handleMatching}>
                    <p>바로가기</p>
                    <Icon icon="uiw:swap-right"/>
                </div>
            </div>
            <div className={styles['home-container']}>
                <Text text="김미림님에게 추천하는 멘토선배"/>
                <div className={styles['mento-container']}>
                    <Major />
                </div>
            </div>
                    <div>
                        <MentoList />
                    </div>
            <div className={styles['home-container']}>
                <div className={styles['interview-container']}>
                    <p className={styles['interview-text']}>interview</p>
                    <div className={styles['interview-more']}>
                        <Text text="졸업후 선배님들의 인터뷰"/>
                        <div onClick={handleNext}>더보기</div>
                    </div>
            </div>
            </div>
                    <ChooseContainer/>

            <div className={styles['home-container']} style={{marginBottom:"30vw"}}>
                    <div className={styles['interview-box']}>
                        {InterviewData.slice(0, 2).map((data, index) => (
                            <InterviewItem key={index} text={data.title} content={data.content}/>
                        ))}
                    </div>
                </div>
            <Nav/>
        </>
    )
}

export default Home;