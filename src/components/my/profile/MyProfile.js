import '../../../styles/common/Style.css';
import styles from '../../../styles/my/profile/MyProfile.module.css';

function MyProfile({ percent }) {
    const progressBarStyle = {
        width: `${percent}%`,
        height: '8px',
        backgroundColor: '#FF6524',
        borderRadius: '0px 10px 10px 0px'
    };

    return (
        <>
            <div className={styles['container']}>
                <p>자기소개</p>
                <div className={styles['info']}>
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
                            <div className={styles['adviceItem']}>
                                <p>현실적으로 조언 해주는 🤔</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles['emoji']}>
                        <p>이모지 자기소개</p>
                        <div className={styles['emojiList']}>
                            <div>
                                <p>🤔</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;