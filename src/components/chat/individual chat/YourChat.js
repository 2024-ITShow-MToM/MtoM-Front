import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/YourChat.module.css';

function YourChat({ text, time, showProfile, userData, imgData }) {
    return (
        <div className={styles['container']}>
            {showProfile && (
                <>
                    <div className={styles['profileDiv']}> 
                        <div className={styles['imgDiv']}> <img src={imgData} /> </div> 
                    </div>
                    <div className={showProfile ? styles['content'] : styles['noProfileContent']}>
                        <p>{userData.studentId} {userData.name}</p>
                        <div className={styles['chat-text']}>
                            <div className={styles['your-chat']}>{text}</div>
                            <p>{time}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default YourChat;