import '../../styles/common/Style.css';
import styles from '../../styles/splash/Splash.module.css';

function Splash() {
    return (
        <>
            <div className={styles['background']}>
                <div className={styles['imgDiv']}>
                    <img src={'/images/mainLogo.png'} />
                </div>
            </div>
        </>
    )
}

export default Splash;