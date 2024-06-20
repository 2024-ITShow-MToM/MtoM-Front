import React, { useState, useEffect } from 'react';

import '../../../../styles/common/Style.css';
import styles from '../../../../styles/my/profile/edit/MyProfileImage.module.css';

import { FiCamera } from "react-icons/fi";

function MyProfileImage({ setUploadedImages, imageUrl }) {
    const [selectedImage, setSelectedImage] = useState(imageUrl || null);

    useEffect(() => {
        setSelectedImage(imageUrl);
    }, [imageUrl]);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        // input.capture = 'environment';
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
        const formData = new FormData();
        formData.append('profile', file);
        setUploadedImages(formData);
    };

    return (
        <>
            <div className={styles['camera']} onClick={handleImageUpload}>
                {!selectedImage && (
                    <>
                        <FiCamera className={styles['cameraIcon']} />
                        <p>사진 등록하기</p>
                    </>
                )}
                {selectedImage && (
                    <img src={selectedImage} alt="profileImg" className={styles['img']} />
                )}
            </div>
        </>
    );
}

export default MyProfileImage;