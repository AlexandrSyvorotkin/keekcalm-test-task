import React from 'react';
import styles from './DescriptionReverse.module.scss'



const DescriptionReverse = ({img, short_text, full_text, stack}) => {
    return (
        <div className={styles.description}>
            <div className={styles.description_content}>
                <a className={styles.img} href='https://ibkmiass.ru/' target="_blank">
                    <img src={img} alt=""/>
                </a>
                <div className={styles.description_text}>
                    <p>{short_text}</p>
                    <p>{full_text}</p>
                    <p>Технологический стек: <span>{stack}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DescriptionReverse;
