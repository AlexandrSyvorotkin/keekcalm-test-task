import React from 'react';
import styles from './Description.module.scss'
import img1 from '../../assets/main/img1.png'
import img2 from '../../assets/main/img2.png'

const Description = () => {
	return (
		<div className={styles.description}>
			<div className={styles.description_header}>
				<span>ut aliquip ex ea commodo consequat</span>
			</div>
			<div className={styles.description_content}>
				<img src={img1} alt=""/>
				<div className={styles.description_text}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</div>
			</div>
		</div>
	);
};

export default Description;
