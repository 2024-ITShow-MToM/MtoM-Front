import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CurrentState from "./detail/CurrentState";
import MajorContainer from "./MajorContainer";
import styles from "../../styles/project/Project.module.css";
import Recruitment from "./Recruitment";

export default function ProjectBox({ data }) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    
    const recruitment_start = data.recruitment_start.replaceAll('-', '.');
    const recruitment_end = data.recruitment_end.slice(5).replaceAll('-', '.');

    const handleClick = () => {
        navigate(`/project/detail/${data.id}`);
    };

    async function UserData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${data.userId}`);
            if (response.status === 200) {
                console.log("프로젝트 생성자 정보 조회 성공");
                setUserData(response.data);
            } else {
                console.log("프로젝트 생성자 정보 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        UserData();
    }, []);

    return (
        <div className={styles['container']} onClick={handleClick}>
            <div className={styles.userBox}>
                <div>
                    <p className={styles.name}>{userData.studentId} {userData.name}</p>
                    <p className={styles.title}>{data.title}</p>
                </div>
                <CurrentState data={data} />
            </div>
            <div className={styles.projectBox}>
                <div style={{ display: "flex", alignItems: "end" }}>
                    <MajorContainer data={data} />
                    <p>{recruitment_start} ~ {recruitment_end}</p>
                </div>
                <Recruitment />
            </div>
        </div>
    );
}