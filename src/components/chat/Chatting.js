import '../../styles/common/Style.css';
import styles from '../../styles/chat/Chatting.module.css';

import Header from './Header';
import ChattingList from './ChattingList';
import Nav from '../common/Nav';

function Chatting() {
    return (
        <>
            <Header />
            <div className={styles['container']}>
                <ChattingList />
            </div>
            <Nav />
        </>
    )
}

export default Chatting;