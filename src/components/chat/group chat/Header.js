import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/group chat/Header.module.css';

import { BsChevronLeft } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header({ title, number }) {
    return (
        <>
            <div className={styles['container']}>
                <Link to='/chat' style={{ color: 'black' }}> <BsChevronLeft /> </Link>
                <div> <p>{title}</p> <p> ({number}) </p> </div>
                <BsList />
            </div>
        </>
    )
}

export default Header;