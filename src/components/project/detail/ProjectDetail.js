import { useEffect, useState } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectDetail.module.css';

import Image from './Image';
import ProjectInfo from './ProjectInfo';
import WriterInfo from './WriterInfo';
import axios from 'axios';

function ProjectDetail({ id }) {
    const [data, setData] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/projects/1`);
            if (response.status === 200) {
                console.log("프로젝트 단일 조회 성공");
                setData(response.data.data);
            } else {
                console.log("프로젝트 단일 조회 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles['container']}>
            <div>
                <Image imgUrl={data.img} />
                <WriterInfo userId={data.userId} />
                
            </div>

            <div className={styles['infoContainer']}>
                <ProjectInfo data={data} />
                <div className={styles['button']}>
                    <button>프로젝트 신청하기</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;