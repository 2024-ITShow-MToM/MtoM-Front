import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/IndividualChat.module.css';

import Header from './Header';
import ChattingBox from './ChattingBox';
import SendInput from './SendInput';

function IndividualChat() {
    return (
        <>
            <Header name='3413 최보람'/>
            <div className={styles['container']}>
                <ChattingBox date='2024-06-05' />
                <SendInput />
            </div>
        </>
    )
}

export default IndividualChat;