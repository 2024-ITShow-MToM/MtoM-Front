import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectDetail.module.css';

import Image from './Image';
import ProjectInfo from './ProjectInfo';
import WriterInfo from './WriterInfo';

function ProjectDetail() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [imgData, setImgData] = useState('');
    const { id } = useParams();

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/projects/${id}`);
            if (response.status === 200) {
                console.log("프로젝트 단일 조회 성공");
                setData(response.data.data);
                UserData(response.data.data.userId);
            } else {
                console.log("프로젝트 단일 조회 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    async function UserData(userId) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${userId}`);
            if (response.status === 200) {
                console.log("작성자 데이터 조회 성공");
                setUserData(response.data);
                UserImgData(response.data.userId);
            } else {
                console.log("작성자 데이터 조회 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    async function UserImgData(userId) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img/${userId}`);
            if (response.status === 200) {
                console.log("프로젝트 작성자 이미지 조회 성공");
                setImgData(response.data);
            } else {
                console.log("프로젝트 작성자 이미지 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const applicationProject = () => {
        navigate('/project/projectApplication');
    }

    return (
        <div className={styles['container']}>
            <div>
                <Image imgUrl={data.img} />
                <WriterInfo userId={data.userId} userData={userData} imgData={imgData} />
            </div>

            <div className={styles['infoContainer']}>
                <ProjectInfo data={data} />
                <div className={styles['button']}>
                    <button onClick={applicationProject}>프로젝트 신청하기</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;