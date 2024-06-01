import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/Image.module.css';

function Image() {
    return (
        <div className={styles['imgDiv']}>
            <img src='/images/example.png' />
        </div>
    )
}

export default Image;