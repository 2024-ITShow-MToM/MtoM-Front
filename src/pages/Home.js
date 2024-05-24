// import Home from "../components/home/home";
import Nav from "../components/common/Nav";
import styles from "../styles/home/Home.module.css"
import Header from "../components/home/Header";
import Major from "../components/home/Major"
import Mento from "../components/home/Mento";
import Text from "../components/home/Text";
import Interview from "../components/home/Interview";
import MentoList from "../components/home/MentoList";

function Home() {
    return (
        <>
            <Header />
            <img src="/images/HomeImg.png" alt="멘토멘티찾기" className={styles['home-img']}/>
            <div className={styles['home-container']}>
                <Text text="김미림님에게 추천하는 멘토선배"/>
                <div className={styles['mento-container']}>
                    <Major />
                    <div>
                        <MentoList />
                    </div>
                </div>
                <div className={styles['interview-container']}>
                    <p className={styles['interview-text']}>interview</p>
                    <Text text="졸업후 선배님들의 인터뷰"/>
                    <div className={styles['interview-box']}>
                        <Interview text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                        <Interview text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    </div>
                </div>
            </div>
            

            <Nav/>
        </>
    )
}

export default Home;