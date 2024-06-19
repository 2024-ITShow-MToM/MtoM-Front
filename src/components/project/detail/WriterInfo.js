import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/WriterInfo.module.css';

function WriterInfo({ userData }) {
    return (
        <div className={styles['container']}>
            <div className={styles['inContainer']}>
                <div className={styles['imageInfo']}>
                    <div className={styles['imgDiv']}>
                        <img src={`${userData.profile}`} />
                    </div>
                    <div className={styles['info']}>
                        <p>{userData.major}</p>
                        <p>{userData.studentId} {userData.name}</p>
                    </div>
                </div>
                <button>방문하기</button>
            </div>
        </div>
    )
}

export default WriterInfo;