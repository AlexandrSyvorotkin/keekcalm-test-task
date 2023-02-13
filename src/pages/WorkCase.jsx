import React from 'react';
import styles from './workcase.module.scss'
import Container from "../Layout/Container/Container";
import {useNavigate} from "react-router-dom";
import Description from "../Components/Description/Description";
import img3 from "../assets/main/img3.png";
import DescriptionReverse from "../Components/DescriptionReverse/DescriptionReverse";
import img4 from "../assets/main/img4.png";
import img1 from "../assets/experience/sevenhiils.png";
import img2 from "../assets/experience/ibk.png";

const WorkCase = ({img, case_name, case_description}) => {


    return (
        <Container>
            <div className={styles.work_case_wrapper}>
                <span>Сложные кейсы с которыми я сталкивался</span>
            </div>
            <div className={styles.work_case}>
                <div className={styles.img}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.description}>
                    <p>{case_name}</p>
                    <p>{case_description}</p>
                </div>
            </div>
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
        </Container>
    );
};

export default WorkCase;
