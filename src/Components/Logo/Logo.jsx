import React from 'react';
import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'
import {useNavigate} from "react-router-dom";

const Logo = () => {

    const navigate = useNavigate()

    const routeToMain = () => {
        navigate('./')
    }

	return (
		<div className={styles.logo} onClick={routeToMain}>
			<div className={styles.logo_img}>
				<img src={logo} alt="logo"/>
			</div>
			<p className={styles.name}>circeya</p>
		</div>
	);
};

export default Logo;
