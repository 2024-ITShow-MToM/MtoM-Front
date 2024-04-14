import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostWrite.module.css';
import ImageBox from './ImageBox';
import QandAPostWriteInput from './Q&APostWriteInput';

function QandAPostWrite() {
    return (
        <>
            <div className={styles['container']}>
                <ImageBox />
                <QandAPostWriteInput />

                <div className={styles['button']}>
                    <button>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default QandAPostWrite;