import React from 'react';
import styles from './Description.module.scss'

const Description = ({img, short_text, full_text}) => {
	return (
		<div className={styles.description}>
			<div className={styles.description_content}>
                <div className={styles.description_content}>
                    <div className={styles.img}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={styles.description_text}>
                        <p>{short_text}</p>
                        <p>{full_text}</p>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Description;
