import '../../../styles/common/Style.css';
import styles from '../../../styles/project/register/ProjectRegister.module.css';

import { Icon } from '@iconify/react';
import { IoPersonSharp } from "react-icons/io5";
import { FiPlus } from 'react-icons/fi';

import Header from '../Header';

function ProjectRegister() {
    return (
        <>
            <Header title='프로젝트 등록'/>
            <div className={styles['container']}>
                <div className={styles['content']}>
                    {/* 이미지 선택 */}
                    <div>
                        <div className={styles['imgDiv']}> 
                            <Icon icon='mdi:camera' />
                        </div>
                    </div>

                    {/* 제목 설명 입력 */}
                    <div className={styles['titleAndcontext']}>
                        <input type='text' placeholder='제목' />
                        <input type='text' placeholder='설명 입력' />
                    </div>
                </div>

                {/* 기간 설정 */}
                <div className={styles['period']}>
                    <div className={styles['recruitment']}>
                        <p>모집 기간 설정</p>
                        <div className={styles['setting']}>
                            <div className={styles['settingBox']}></div>
                            ~
                            <div className={styles['settingBox']}></div>
                        </div>
                    </div>
                    
                    <div className={styles['work']}>
                        <p>작업 기간 설정</p>
                        <div className={styles['setting']}>
                            <div className={styles['settingBox']}></div>
                            ~
                            <div className={styles['settingBox']}></div>
                        </div>
                    </div>
                </div>

                {/* 모집 인원 설정 */}
                <div className={styles['people']}>
                    <div className={styles['peopleTitle']}>
                        <p>모집 인원</p>
                        <p>5명</p>
                    </div>
                    <div className={styles['peopleNum']}>
                        <div className={styles['peopleDiv']}>
                            <div className={styles['person']}>
                                <div className={styles['textDiv']}>프론트엔드</div>
                                <IoPersonSharp style={{ fontSize: '20px', color: '#5A5A5A' }} />
                            </div>
                            <FiPlus style={{ fontSize: '20px', right: '5%', color: '#5A5A5A' }}/>
                        </div>

                        <div className={styles['peopleDiv']}>
                            <div className={styles['person']}>
                                <div className={styles['textDiv']}>디자인</div>
                                <IoPersonSharp style={{ fontSize: '20px', color: '#5A5A5A' }} />
                            </div>
                            <FiPlus style={{ fontSize: '20px', color: '#5A5A5A' }}/>
                        </div>

                        <div className={styles['peopleDiv']}>
                            <div className={styles['person']}>
                                <div className={styles['textDiv']}>백엔드</div>
                                <IoPersonSharp style={{ fontSize: '20px', color: '#5A5A5A' }} />
                            </div>
                            <FiPlus style={{ fontSize: '20px', right: '5%', color: '#5A5A5A' }}/>
                        </div>

                        <div className={styles['peopleDiv']}>
                            <div className={styles['person']}>
                                <div className={styles['textDiv']}>기획</div>
                                <IoPersonSharp style={{ fontSize: '20px', color: '#5A5A5A' }} />
                            </div>
                            <FiPlus style={{ fontSize: '20px', color: '#5A5A5A' }}/>
                        </div>
                    </div>
                </div>

                {/* 프로젝트 소개 */}
                <div className={styles['projectText']}>
                    <p>프로젝트 소개</p>
                    <textarea />
                </div>

                <button>프로젝트 만들기</button>
            </div>
        </>
    )
}

export default ProjectRegister;