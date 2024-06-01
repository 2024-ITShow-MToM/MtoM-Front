import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/WriterInfo.module.css';

function WriterInfo() {
    return (
        <div className={styles['container']}>
            <div className={styles['inContainer']}>
                <div className={styles['imageInfo']}>
                    <div className={styles['imgDiv']}>
                        <img src='/images/example.png' />
                    </div>
                    <div className={styles['info']}>
                        <p>디자인과</p>
                        <p>3413 최보람</p>
                    </div>
                </div>
                <button>방문하기</button>
            </div>
        </div>
    )
}

export default WriterInfo;