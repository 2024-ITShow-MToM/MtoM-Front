import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/group chat/GroupChat.module.css';

import Header from './Header';
import ChattingBox from './ChattingBox';
import SendInput from './SendInput';

function GroupChat() {
    return (
        <>
            <Header title='2024 APP JAM' number='4'/>
            <div className={styles['container']}>
                <ChattingBox date='오늘' />
                <SendInput />
            </div>
        </>
    )
}

export default GroupChat;