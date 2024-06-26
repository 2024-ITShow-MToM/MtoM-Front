import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/Header.module.css';

import { BsChevronLeft } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header({ name }) {
    return (
        <>
            <div className={styles['container']}>
                <Link to='/chat' style={{ color: 'black' }}> <BsChevronLeft /> </Link>
                <p>{name}</p>
                <BsThreeDotsVertical />
            </div>
        </>
    )
}

export default Header;