import '../../styles/common/Style.css';
import styles from '../../styles/my/Info.module.css';

function Info() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                <p>3400 김미림</p>
            </div>
        </>
    )
}

export default Info;