import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/YourChat.module.css';

function YourChat({ text, time, showProfile }) {
    return (
        <div className={styles['container']}>
            {showProfile && (
                <div className={styles['profileDiv']}> 
                    <div className={styles['imgDiv']}> 
                        <img src='/images/example.png' />
                    </div> 
                    <p>3413 최보람</p>
                </div>
            )}
            <div className={showProfile ? styles['content'] : styles['noProfileContent']}>
                <div className={styles['your-chat']}>{text}</div>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default YourChat;