import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectInfo.module.css';

import { Icon } from '@iconify/react';

import CurrentState from './CurrentState';

function ProjectInfo() {
    return (
        <div className={styles['container']}>
            <CurrentState />

            <div className={styles['title']}>
                <p>앱잼 공모전 같이 나가실 분 구해요!</p>
                <p>앱잼이라는 외부 프로젝트 같이 하실 분들 계실까용?</p>
            </div>

            <hr/>

            <div className={styles['info']}>
                <div className={styles['recruitment']}>
                    <p>모집기간</p>
                    <p>2023.11.01 ~ 12.01</p>
                </div>

                <div className={styles['work']}>
                    <p>작업기간</p>
                    <p>2023.11.01 ~ 12.01</p>
                </div>

                <div className={styles['situation']}>
                    <p>모집현황</p>
                    
                    <div className={styles['person']}>
                        <div className={styles['front-end']}>
                            <div className={styles['personTitle']}>
                                <p>프론트엔드</p>
                            </div>
                            <Icon icon='fluent:person-20-filled' style={{ fontSize: '20px' }} />
                        </div>

                        <div className={styles['back-end']}>
                            <div className={styles['personTitle']}>
                                <p>백엔드</p>
                            </div>
                            <Icon icon='fluent:person-20-filled' style={{ fontSize: '20px' }} />
                        </div>

                        <div className={styles['design']}>
                            <div className={styles['personTitle']}>
                                <p>디자인</p>
                            </div>
                            <Icon icon='fluent:person-20-filled' style={{ fontSize: '20px' }} />
                        </div>

                        {/* <div className={styles['plan']}>
                            <div className={styles['personTitle']}>
                                <p>기획자</p>
                            </div>
                            <Icon icon='fluent:person-20-filled' style={{ fontSize: '20px' }} />
                        </div> */}
                    </div>
                </div>

                <div className={styles['content']}>
                    <p>프로젝트 소개</p>
                    <p>무박 2일 프로젝트로 간단하게 주제가 정해지면 앱 기획 후 UI 디자인 하고 앱 실행까지 진행합니다!</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;