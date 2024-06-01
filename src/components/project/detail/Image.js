import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/Image.module.css';

function Image({ imgUrl }) {
    return (
        <div className={styles['imgDiv']}>
            {
                imgUrl ? (
                    <img src={`${imgUrl}`} />
                ) : (
                    <img src='/images/example.png' />
                )
            }
        </div>
    )
}

export default Image;