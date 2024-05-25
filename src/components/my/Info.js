import '../../styles/common/Style.css';
import styles from '../../styles/my/Info.module.css';

function Info({ name, studentId, profileImg }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src={`${profileImg}`} /> </div>
                <p>{studentId} {name}</p>
            </div>
        </>
    )
}

export default Info;