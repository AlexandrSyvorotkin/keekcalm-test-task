import React, {useContext, useEffect, useState} from 'react';
import styles from './Layout.module.scss'
import img1 from "../../assets/experience/sevenhiils.png";
import img2 from "../../assets/experience/ibk.png";
import img3 from "../../assets/main/img3.png";
import img4 from "../../assets/main/img4.png";
import Description from "../../Components/Description/Description";
import DescriptionReverse from "../../Components/DescriptionReverse/DescriptionReverse";
import Slider from "../../Components/Slider/Slider";
import Modal from "../../UI/Modal";


const Layout = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }

    // useEffect(() => {
    //     setModalOpen(true)
    // }, [])

	return (
		<main className={styles.layout}>
            <div className={styles.header}>Мой коммерческий опыт работы</div>
			<Description
                img={img1}
                short_text='Сайт киберспортивного турнира "7 холмов"'
                full_text='В данном проекте мне удалось поучаствовать в организации турнира, проект реализовывался 8 месяцев. Включал в себя подготовку,
                организацию, проведение, подведение итогов, формирование финансовой отчетности, а также главное как для меня это создание, улучшение и поддержку сайта турнира.
                Во время реализации мною в первые были примененны знания полученные во время учебы, реализована frontend часть, роутинг, регистрация на турнир, сбор данных и их обработка.'
                stack='React, React-Router, React-Hook-Form, Framer-Motion, scss'
            />
			<DescriptionReverse
                img={img2}
                short_text='Сайт строительной компании ИБК Миасс'
                full_text='В данном проекте мне удалось поучаствовать в реализации сайта для строительной компании ИБК Миасс.
                Проект реализовывался командой из 7 человек: это Project Manager, Backend разработчик, Frontend разработчик, дизайнер.
                За frontend часть отвечал я. В этом проекте мне удалось поработать с rest api, реализовать фильтрацию квартир, сделать настройку небольшого и не сложного CI\CD, сделать CEO оптимизацию.
                В данный момент идет активная работа и поддержка: вводятся новые фичи, новый функционал, устранение узких\слабых мест'
                stack='Next/React/ReduxToolkit, scss modules, react-hook-form, axios.'
            />
            <Slider/>
            <Description
                img={img3}
                short_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
            <DescriptionReverse
                img={img4}
                short_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                full_text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            />
            {modalOpen
                ?
                <Modal closeModal={closeModal}/>
                :
                null}
		</main>
	);
};

export default Layout;
