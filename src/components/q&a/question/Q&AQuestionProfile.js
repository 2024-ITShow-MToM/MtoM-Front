import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Q&AQuestionProfile.module.css';

function QandAQuestionProfile() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                <div className={styles['info']}>
                    <p>디자인과</p>
                    <p>3413 최보람</p>
                </div>
            </div>
        </>
    )
}

export default QandAQuestionProfile;