import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/SearchDetail.module.css';

function SearchDetail() {
    const progressBarStyle = {
        width: `60%`,
        height: '8px',
        backgroundColor: '#FF6524',
        borderRadius: '0px 10px 10px 0px'
    };

    return (
        <div className={styles['container']}>
            <div className={styles['info']}>
                <div className={styles['information']}>
                    <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                    <div className={styles['name']}>
                        <p>디자인과</p>
                        <p>3413 최보람</p>
                    </div>
                    <p>안녕하세요! 친절한 후배들과 멘토링 진행 하고 싶어요.</p>
                </div>

                <div className={styles['myself']}>
                    <p>자기소개</p>

                    <div className={styles['mbti']}>
                        <p>MBTI</p>
                        <p>ISTP</p>
                    </div>

                    <div className={styles['mento']}>
                        <p>멘토링 주제</p>
                        <div className={styles['tag']}>
                            <p>#동아리</p>
                        </div>
                    </div>

                    <div className={styles['skill']}>
                        <p>SKILL</p>
                        <div className={styles['skillList']}>
                            <div className={styles['skillItem']}>
                                <p>Ai</p>
                                <div style={progressBarStyle}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['advice']}>
                        <p>조언 성향</p>
                        <div className={styles['adviceList']}>
                            {/* {
                                personal.map((item, index) => {
                                    return (
                                        <div className={styles['adviceItem']} key={index}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                    </div>

                    <div className={styles['emoji']}>
                        <p>이모지 자기소개</p>
                        <div className={styles['emojiList']}>
                            {/* {
                                emoji.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{item}</p>
                                        </div>
                                    );
                                })
                            } */}
                        </div>
                    </div>

                </div>
            </div>

            <button>채팅하기</button>
        </div>
    )
}

export default SearchDetail;