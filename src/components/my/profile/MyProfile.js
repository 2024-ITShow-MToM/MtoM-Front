import '../../../styles/common/Style.css';
import styles from '../../../styles/my/profile/MyProfile.module.css';

function MyProfile({ data }) {
    const progressBarStyle = {
        width: `60%`,
        height: '8px',
        backgroundColor: '#FF6524',
        borderRadius: '0px 10px 10px 0px'
    };

    const mbti = data.mbti ? data.mbti.toUpperCase() : ''; // mbti
    const emoji = data.imogi ? data.imogi.split(",") : []; // emoji
    const personal = data.personal ? data.personal.split(",") : []; // 조언 성향
    const mentoring_topics = data.mentoring_topics ? data.mentoring_topics.replaceAll(", ", " ") : []; // 멘토링 주제

    return (
        <>
            <div className={styles['container']}>
                <p>자기소개</p>
                <div className={styles['info']}>
                    <div className={styles['mbti']}>
                        <p>MBTI</p>
                        <p>{mbti}</p>
                    </div>

                    <div className={styles['mento']}>
                        <p>멘토링 주제</p>
                        <div className={styles['tag']}>
                            <p>{mentoring_topics}</p>
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
                            {
                                personal.map((item, index) => {
                                    return (
                                        <div className={styles['adviceItem']} key={index}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={styles['emoji']}>
                        <p>이모지 자기소개</p>
                        <div className={styles['emojiList']}>
                            {
                                emoji.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{item}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;