import React from 'react';
import styles from './Header.module.scss'
import Logo from "../../Components/Logo/Logo";
import Container from "../Container/Container";

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header_wrapper}>
					<Logo/>
					<p className={styles.phone_number}>+7 (495) 495-49-54</p>
				</div>
			</Container>
		</header>
	);
};

export default Header;
