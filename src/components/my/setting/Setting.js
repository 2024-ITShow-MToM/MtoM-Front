import '../../../styles/common/Style.css';
import styles from '../../../styles/my/setting/Setting.module.css';

import { Icon } from '@iconify/react';
import { IoChatbubbleOutline } from "react-icons/io5";

function Setting() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['innerContainer']}>
                    <p>나의 관리</p>
                    <div className={styles['buttons']}>
                        <div className={styles['div']}>
                            <Icon icon='ic:round-manage-accounts' />
                            <p>계정 관리</p>
                        </div>

                        <hr />

                        <div className={styles['div']}>
                            <Icon icon='streamline:class-lesson-solid' />
                            <p>멘토멘티 관리</p>
                        </div>

                        <hr />
                        
                        <div className={styles['div']}>
                            <Icon icon='solar:laptop-broken' />
                            <p>프로젝트 관리</p>
                        </div>
                    </div>
                </div>

                <div className={styles['innerContainer']}>
                    <p>나의 활동</p>
                    <div className={styles['buttons']}>
                        <div className={styles['div']}>
                            <Icon icon='ph:heart' />
                            <p>하트</p>
                        </div>

                        <hr />

                        <div className={styles['div']}>
                            <IoChatbubbleOutline />
                            <p>댓글</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;