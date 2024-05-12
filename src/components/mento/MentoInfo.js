import '../../styles/common/Style.css';
import styles from '../../styles/mento/MentoInfo.module.css';

function MentoInfo() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}>
                    <img src='/images/example.png' />
                </div>
                <div className={styles['info']}>
                    <div className={styles['personInfo']}>
                        <p>웹솔루션과</p>
                        <p>3413 최보람</p>
                    </div>
                    <p>안녕하세요! 친절한 후배들과 멘토링 진행 하고 싶어요</p>
                </div>
            </div>
        </>
    )
}

export default MentoInfo;