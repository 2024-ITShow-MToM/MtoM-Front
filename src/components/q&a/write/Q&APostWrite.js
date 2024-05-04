import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&APostWrite.module.css';
import ImageBox from './ImageBox';
import QandAPostWriteInput from './Q&APostWriteInput';

function QandAPostWrite() {
    return (
        <>
            <div className={styles['container']}>
                <ImageBox />
                <QandAPostWriteInput />
            </div>
        </>
    )
}

export default QandAPostWrite;