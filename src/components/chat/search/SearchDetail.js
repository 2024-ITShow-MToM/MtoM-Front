import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChattingContext } from '../ChattingProvider';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/SearchDetail.module.css';

function SearchDetail({ user }) {
    const navigate = useNavigate();
    const { saveId } = useContext(ChattingContext);
    const mbti = user.mbti ? user.mbti.toUpperCase() : '';
    const emoji = user.imogi ? user.imogi.split(",") : [];
    const personal = user.personal ? user.personal.split(",") : [];
    const mentoring_topics = user.mentoring_topics ? user.mentoring_topics.replaceAll(", ", " ") : [];

    const ReadyChatting = () => {
        navigate(`/chat/individual/${user.userId}`);
        saveId(user.userId);
    }

    return (
        <div className={styles['container']}>
            <div className={styles['info']}>
                <div className={styles['information']}>
                    <div className={styles['imgDiv']}> <img src={`${user.profile}`} /> </div>
                    <div className={styles['name']}>
                        <p>{user.major}</p>
                        <p>{user.studentId} {user.name}</p>
                    </div>
                    <p>{user.information}</p>
                </div>

                <div className={styles['myself']}>
                    <p>자기소개</p>

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
                            {user.skills.map((skill, index) => (
                                <div className={styles['skillItem']} key={index}>
                                    <p>{skill.skill_name}</p>
                                    <div className={styles['progressBar']} style={{ width: `${skill.skill_score}%`, height: '8px', backgroundColor: '#FF6524', borderRadius: '0px 10px 10px 0px' }}></div>
                                </div>
                            ))}
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

            <button onClick={ReadyChatting}>채팅하기</button>
        </div>
    )
}

export default SearchDetail;