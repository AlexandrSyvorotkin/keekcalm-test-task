import React from 'react';
import styles from './workcase.module.scss'
import Container from "../Layout/Container/Container";
import {useNavigate} from "react-router-dom";

const WorkCase = ({img, case_name, case_description}) => {

    const navigate = useNavigate()

    const routeToMain = () => {
        navigate('./')
    }


    return (
        <Container>
            <div className={styles.work_case}>
                <div className={styles.img}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.description}>
                    <p>{case_name}</p>
                    <p>{case_description}</p>
                    {/*<button onClick={routeToMain}>Назад</button>*/}
                </div>
            </div>

        </Container>
    );
};

export default WorkCase;