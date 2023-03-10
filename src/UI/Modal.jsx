import React from 'react';
import styles from './Modal.module.scss'
import smile from '../assets/smile.jpeg'

const Modal = ({closeModal}) => {
    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header} onClick={closeModal}>Закрыть</div>
                <div className={styles.warning}>
                    <p>Добрый день уважаемые представители компании "Keep Calm",
                        прошу прочитать данный текст перед проверкой тестового задания, в нем будет парочка обьявлений =) </p>
                    <p>Во первых большое спасибо, ваше тестовое мне показалось очень интересным и необычным в рамках большого количества тестовых от других компаний.
                        Видно что вы постарались над его идеей, ну а я решил немного постараться и внести свою лепту в контентное наполнение задания.
                        Я решил использовать вместо обычных картинок описать минимально свой опыт работы, чем занимался, в каких проектах участвовал, и описать самые сложные задачи с которыми сталкивался.
                        Прошу прощения за творческую самодеятельность. Приятного просмотра =)
                    </p>
                    <img src={smile} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
