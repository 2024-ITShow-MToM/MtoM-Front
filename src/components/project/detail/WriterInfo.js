import { useEffect, useState } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/WriterInfo.module.css';
import axios from 'axios';

function WriterInfo({ userId }) {
    const [data, setData] = useState([]);
    const [imgData, setImgData] = useState('');

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users`, {
                params: {
                    userId: userId
                }
            });
            if (response.status === 200) {
                console.log("작성자 데이터 조회 성공");
                setData(response.data);
                try {
                    const imgResponse = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img`, {
                        params: {
                            userId: userId
                        }
                    });
                    if (imgResponse.status === 200) {
                        console.log("회원 프로필 이미지 불러오기 성공");
                        setImgData(imgResponse.data);
                    } else {
                        console.log("회원 프로필 이미지 불러오기 실패", imgResponse.status);
                    }
                } catch(error) {
                    console.log("서버 연결 실패", error);
                }
            } else {
                console.log("작성자 데이터 조회 실패", response.status);
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
            <div className={styles['inContainer']}>
                <div className={styles['imageInfo']}>
                    <div className={styles['imgDiv']}>
                        <img src={`${imgData}`} />
                    </div>
                    <div className={styles['info']}>
                        <p>{data.major}</p>
                        <p>{data.studentId} {data.name}</p>
                    </div>
                </div>
                <button>방문하기</button>
            </div>
        </div>
    )
}

export default WriterInfo;