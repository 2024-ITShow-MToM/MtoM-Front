import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProjectContext } from './ProjectProvider';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/register/ProjectRegister.module.css';

import { Icon } from '@iconify/react';
import { FiPlus } from 'react-icons/fi';
import { FaRegCalendarAlt } from "react-icons/fa";

import Header from '../Header';
import ProjectRegisterModal from '../../modals/ProjectRegisterModal';

function ProjectRegister() {
    const navigate = useNavigate();
    const { recruitmentStart, recruitmentEnd, workStart, workEnd, projectImg, projectTitle, projectContent, projectBackendCount, projectFrontendCount, projectDesignCount, projectPromoterCount, projectIntroduction, saveInfo } = useContext(ProjectContext);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [uploadImages, setUploadedImages] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const userId = useSelector(state => state.userId);

    const [title, setTitle] = useState(''); // 제목
    const [desc, setDesc] = useState(''); // 설명
    const [frontendCount, setFrontendCount] = useState(0); // 프론트엔드 개발자 수
    const [designCount, setDesignCount] = useState(0); // 디자이너 수
    const [backendCount, setBackendCount] = useState(0); // 백엔드 개발자 수
    const [planCount, setPlanCount] = useState(0); // 기획자 수
    const [introduction, setIntroduction] = useState(''); // 프로젝트 소개

    const handleModal = () => {
        setShowModal(true);
        setTimeout(() => {
            handleCloseModal();
        }, 1000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/project');
    }

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
        
            reader.onloadend = () => {
                setBackgroundImage(reader.result);
            };
        
            if (file) {
                reader.readAsDataURL(file);
                uploadImage(file);
            }
        };
        input.click();
    };

    const uploadImage = (file) => {
        setUploadedImages(file);
    };

    const people = [
        { id: 1, text: '프론트엔드' },
        { id: 2, text: '디자인' },
        { id: 3, text: '백엔드' },
        { id: 4, text: '기획' }
    ];

    const addPersonShape = (personId) => {
        switch(personId) {
            case 1: setFrontendCount(frontendCount + 1); break;
            case 2: setDesignCount(designCount + 1); break;
            case 3: setBackendCount(backendCount + 1); break;
            case 4: setPlanCount(planCount + 1); break;
            default: break;
        }
    };
    const peopleNumber = frontendCount + designCount + backendCount + planCount;

    // 프로젝트 등록 서버 연결
    const projectRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", uploadImages);
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('recruitment_start', recruitmentStart);
        formData.append('recruitment_end', recruitmentEnd);
        formData.append('work_start', workStart);
        formData.append('work_end', workEnd);
        formData.append('frontend_personnel', frontendCount);
        formData.append('backend_personnel', backendCount);
        formData.append('designer_personnel', designCount);
        formData.append('promoter_personnel', planCount);
        formData.append('introduction', introduction);
    
        try {
            const reqeust = await axios.post(`${process.env.REACT_APP_HOST}/api/projects`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (reqeust.status === 201) {
                console.log("프로젝트 등록 성공");
                handleModal();
            } else {
                console.log("프로젝트 등록 실패", reqeust.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        setBackgroundImage(projectImg);
        setTitle(projectTitle);
        setDesc(projectContent);
        setBackendCount(projectBackendCount);
        setFrontendCount(projectFrontendCount);
        setDesignCount(projectDesignCount);
        setPlanCount(projectPromoterCount);
        setIntroduction(projectIntroduction);
    }, [projectImg, projectTitle, projectContent, projectBackendCount, projectFrontendCount, projectDesignCount, projectPromoterCount, projectIntroduction]);

    const moveRecruitmentPage = () => {
        navigate('/project/recruitment-period');
        saveInfo(backgroundImage, title, desc, backendCount, frontendCount, designCount, planCount, introduction);
    }

    const moveWorkPage = () => {
        navigate('/project/work-period');
        saveInfo(backgroundImage, title, desc, backendCount, frontendCount, designCount, planCount, introduction);
    }

    return (
        <>
            <Header title='프로젝트 등록'/>
            <div className={styles['container']}>
                <div>
                    <div className={styles['content']}>
                        {/* 이미지 선택 */}
                        <div>
                            <div className={styles['imgDiv']} onClick={handleImageUpload}>
                                {projectImg ? (
                                    <img src={projectImg} alt="프로젝트 이미지" />
                                ) : backgroundImage ? (
                                    <img src={backgroundImage} alt="배경 이미지" />
                                ) : (
                                    <Icon icon='mdi:camera' />
                                )}
                            </div>
                        </div>

                        {/* 제목 설명 입력 */}
                        <div className={styles['titleAndcontext']}>
                            <input type='text' placeholder='제목' onChange={(e) => setTitle(e.target.value)} value={title}/>
                            <input type='text' placeholder='설명 입력' onChange={(e) => setDesc(e.target.value)} value={desc}/>
                        </div>
                    </div>

                    {/* 기간 설정 */}
                    <div className={styles['period']}>
                        <div className={styles['recruitment']}>
                            <p>모집 기간 설정</p>
                            <div className={styles['setting']}>
                                <div className={styles['settingBox']}> <p>{recruitmentStart}</p> </div>
                                ~
                                <div className={styles['settingBox']}> <p>{recruitmentEnd}</p> </div>
                                <FaRegCalendarAlt style={{ fontSize: '24px', color: '#FF6524' }} onClick={moveRecruitmentPage} />
                            </div>
                        </div>
                        
                        <div className={styles['work']}>
                            <p>작업 기간 설정</p>
                            <div className={styles['setting']}>
                                <div className={styles['settingBox']}> <p>{workStart}</p> </div>
                                ~
                                <div className={styles['settingBox']}> <p>{workEnd}</p> </div>
                                <FaRegCalendarAlt style={{ fontSize: '24px', color: '#FF6524' }} onClick={moveWorkPage}/>
                            </div>
                        </div>
                    </div>

                    {/* 모집 인원 설정 */}
                    <div className={styles['people']}>
                        <div className={styles['peopleTitle']}>
                            <p>모집 인원</p>
                            <p>{peopleNumber}명</p>
                        </div>
                        <div className={styles['peopleNum']}>
                            {people.map(person => (
                                <div className={styles['peopleDiv']} key={person.id}>
                                    <div className={styles['person']}>
                                        <div className={styles['textDiv']}>{person.text}</div>
                                            <div className={styles['peopleNumber']}>
                                                {[...Array(person.id === 1 ? frontendCount : person.id === 2 ? designCount : person.id === 3 ? backendCount : planCount)].map((_, index) => (
                                                    <Icon icon='fluent:person-20-filled' key={index+1} style={{ fontSize: '20px', color: '#5A5A5A' }} />
                                                ))}
                                            </div>
                                    </div>
                                    <FiPlus style={{ fontSize: '20px', color: '#5A5A5A', [person.id % 2 !== 0 ? 'right' : null]: '5%'  }} onClick={() => addPersonShape(person.id)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 프로젝트 소개 */}
                    <div className={styles['projectText']}>
                        <p>프로젝트 소개</p>
                        <textarea onChange={(e) => setIntroduction(e.target.value)} value={introduction} />
                    </div>
                </div>

                <button onClick={projectRegister}>프로젝트 만들기</button>
                {showModal && (
                    <ProjectRegisterModal />
                )}
            </div>
        </>
    )
}

export default ProjectRegister;