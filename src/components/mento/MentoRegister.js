import '../../styles/common/Style.css';
import styles from '../../styles/mento/MentoRegister.module.css';

import Header from '../common/Header';
import MyProfile from '../my/profile/MyProfile';
import MentoInfo from './MentoInfo';

function MentoRegister() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['header']}>
                    <Header text='멘토멘티 신청'/>
                </div>

                <div className={styles['info']}>
                    <MentoInfo />
                    <MyProfile percent='40' />
                </div>
                <div className={styles['button']}>
                    <button>멘토멘티 신청</button>
                </div>
            </div>
        </>
    )
}

export default MentoRegister;