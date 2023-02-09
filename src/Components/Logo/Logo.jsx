import React from 'react';
import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<div className={styles.logo_img}>
				<img src={logo} alt="logo"/>
			</div>
			<p className={styles.name}>circeya</p>
		</div>
	);
};

export default Logo;
