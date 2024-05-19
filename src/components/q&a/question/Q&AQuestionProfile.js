import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Q&AQuestionProfile.module.css';

function QandAQuestionProfile({ data }) {
    if (!data) {
        return;
    }

    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <>
                            <div className={styles['container']} key={index}>
                                <div className={styles['imgDiv']}> <img src={item.profile} /> </div>
                                <div className={styles['info']}>
                                    <p>{item.major}</p>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default QandAQuestionProfile;