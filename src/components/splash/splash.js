import style from '../../styles/common/style.css';
import splashStyle from '../../styles/splash/splash.module.css';

function Splash() {
    return (
        <>
            <div className={splashStyle['background']}>
                <div className={splashStyle['imgDiv']}>
                    <img src={process.env.PUBLIC_URL + '/images/mainLogo.png'} />
                </div>
            </div>
        </>
    )
}

export default Splash;