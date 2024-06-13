import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectInfo.module.css';

import { Icon } from '@iconify/react';

import CurrentState from './CurrentState';

function ProjectInfo({ data }) {
    let recruitment_start = data.recruitment_start ? data.recruitment_start.replaceAll("-", ".") : 'Not found';
    let recruitment_end = data.recruitment_end ? data.recruitment_end.replaceAll("-", ".") : 'Not found';
    let work_start = data.work_start ? data.work_start.replaceAll("-", ".") : 'Not found';
    let work_end = data.work_end ? data.work_end.replaceAll("-", ".") : 'Not found';
    
    return (
        <div className={styles['container']}>
            <CurrentState />

            <div className={styles['title']}>
                <p>{data.title}</p>
                <p>{data.description}</p>
            </div>

            <hr/>

            <div className={styles['info']}>
                <div className={styles['recruitment']}>
                    <p>모집기간</p>
                    <p>{recruitment_start} ~ {recruitment_end}</p>
                </div>

                <div className={styles['work']}>
                    <p>작업기간</p>
                    <p>{work_start} ~ {work_end}</p>
                </div>

                <div className={styles['situation']}>
                    <p>모집현황</p>
                    
                    <div className={styles['person']}>
                        <div className={styles['front-end']}>
                            <div className={styles['personTitle']}>
                                <p>프론트엔드</p>
                            </div>
                            {[...Array(data.frontend_personnel)].map((_, index) => (
                                <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: '#0066FF' }} />
                            ))}
                        </div>

                        <div className={styles['back-end']}>
                            <div className={styles['personTitle']}>
                                <p>백엔드</p>
                            </div>
                            {[...Array(data.backend_personnel)].map((_, index) => (
                                <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: '#0066FF' }} />
                            ))}
                        </div>

                        <div className={styles['design']}>
                            <div className={styles['personTitle']}>
                                <p>디자인</p>
                            </div>
                            {[...Array(data.designer_personnel)].map((_, index) => (
                                <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: '#0066FF' }} />
                            ))}
                        </div>

                        <div className={styles['plan']}>
                            <div className={styles['personTitle']}>
                                <p>기획자</p>
                            </div>
                            {[...Array(data.promoter_personnel)].map((_, index) => (
                                <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: '#0066FF' }} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles['content']}>
                    <p>프로젝트 소개</p>
                    <p>{data.introduction}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;