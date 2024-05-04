import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/ImageBox.module.css';

import { GoPlus } from "react-icons/go";

function ImageBox() {
    const [backgroundImage, setBackgroundImage] = useState(null);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const selectedFile = event.target.files[0];
            const objectURL = URL.createObjectURL(selectedFile);
            setBackgroundImage(objectURL);
        };
        input.click();
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['background']} style={{backgroundImage: `url(${backgroundImage})`}} onClick={handleImageUpload}>
                    {!backgroundImage && (
                        <label htmlFor="imageInput" className={styles['circle']}>
                            <GoPlus />
                        </label>
                    )}
                </div>
            </div>
        </>
    )
}

export default ImageBox;