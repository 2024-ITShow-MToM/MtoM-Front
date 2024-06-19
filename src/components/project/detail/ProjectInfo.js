import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectInfo.module.css';

import { Icon } from '@iconify/react';

import CurrentState from './CurrentState';

function ProjectInfo({ data }) {
    let recruitment_start = data.recruitment_start ? data.recruitment_start.replaceAll("-", ".") : 'Not found';
    let recruitment_end = data.recruitment_end ? data.recruitment_end.replaceAll("-", ".") : 'Not found';
    let work_start = data.work_start ? data.work_start.replaceAll("-", ".") : 'Not found';
    let work_end = data.work_end ? data.work_end.replaceAll("-", ".") : 'Not found';

    const frontendDiff = data.frontend_personnel - data.current_frontend;
    const backendDiff = data.backend_personnel - data.current_backend;
    const designDiff = data.designer_personnel - data.current_designer;
    const planDiff = data.promoter_personnel - data.current_promoter;

    const iconColor = (diff) => diff === 0 ? '#EAEBEF' : '#0066FF';

    return (
        <div className={styles['container']}>
            <CurrentState data={data} />

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
                        {
                            data.frontend_personnel > 0 && (
                                <div className={styles['front-end']}>
                                    <div className={styles['personTitle']} style={ frontendDiff <= 0 ? { color: '#EAEBEF', borderColor: '#EAEBEF' } : { color: '#0066FF', borderColor: '#0066FF' } }>
                                        <p>프론트엔드</p>
                                    </div>
                                    {[...Array(data.frontend_personnel)].map((_, index) => (
                                        <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: index < frontendDiff ? '#0066FF' : iconColor(frontendDiff) }} />
                                    ))}
                                </div>
                            )
                        }

                        {
                            data.backend_personnel > 0 && (
                                <div className={styles['back-end']}>
                                    <div className={styles['personTitle']} style={ backendDiff <= 0 ? { color: '#EAEBEF', borderColor: '#EAEBEF' } : { color: '#0066FF', borderColor: '#0066FF' } }>
                                        <p>백엔드</p>
                                    </div>
                                    {[...Array(data.backend_personnel)].map((_, index) => (
                                        <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: index < backendDiff ? '#0066FF' : iconColor(backendDiff) }} />
                                    ))}
                                </div>
                            )
                        }

                        {
                            data.designer_personnel > 0 && (
                                <div className={styles['design']}>
                                    <div className={styles['personTitle']} style={ designDiff <= 0 ? { color: '#EAEBEF', borderColor: '#EAEBEF' } : { color: '#0066FF', borderColor: '#0066FF' } }>
                                        <p>디자인</p>
                                    </div>
                                    {[...Array(data.designer_personnel)].map((_, index) => (
                                        <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: index < designDiff ? '#0066FF' : iconColor(designDiff) }} />
                                    ))}
                                </div>
                            )
                        }

                        {
                            data.promoter_personnel > 0 && (
                                <div className={styles['plan']}>
                                    <div className={styles['personTitle']} style={ planDiff <= 0 ? { color: '#EAEBEF', borderColor: '#EAEBEF' } : { color: '#0066FF', borderColor: '#0066FF' } }>
                                        <p>기획자</p>
                                    </div>
                                    {[...Array(data.promoter_personnel)].map((_, index) => (
                                        <Icon key={index} icon='fluent:person-20-filled' style={{ fontSize: '20px', color: index < planDiff ? '#0066FF' : iconColor(planDiff) }} />
                                    ))}
                                </div>
                            )
                        }
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