import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileImage.module.css';

import { FiCamera } from "react-icons/fi";

function ProfileImage({ setUploadedImages }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
        
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
        
            if (file) {
                reader.readAsDataURL(file);
                uploadImage(file);
            }
        };
        input.click();
    };

    const uploadImage = (file) => {
        setUploadedImages(file);
    };

    return (
        <>
            <div className={styles['camera']} onClick={handleImageUpload}>
                {!selectedImage && (
                    <>
                        <FiCamera className={styles['cameraIcon']}/>
                        <p>사진 등록하기</p>
                    </>
                )}
                {selectedImage && (
                    <img src={selectedImage} alt="profileImg" className={styles['img']} />
                )}
            </div>
        </>
    )
}

export default ProfileImage;