import '../../styles/common/Style.css';
import styles from '../../styles/project/Header.module.css';

import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header({ title }) {
    return (
        <>
            <div className={styles['container']}>
                <Link to='/project' style={{ color: 'black' }}> <BsChevronLeft /> </Link>
                <div>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default Header;