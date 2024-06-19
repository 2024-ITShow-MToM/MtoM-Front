import '../../styles/common/Style.css';
import styles from '../../styles/my/Info.module.css';

function Info({ name, studentId, profileImg }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> 
                    {
                        profileImg ? (
                            <img src={`${process.env.REACT_APP_IMAGEURL}/${profileImg}`} />
                        ) : (
                            <img src='/images/대체Img.png' />
                        )
                    }
                </div>
                <p>{studentId} {name}</p>
            </div>
        </>
    )
}

export default Info;