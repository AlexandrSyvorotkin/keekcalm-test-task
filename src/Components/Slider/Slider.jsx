import { useEffect, useRef } from "react";
import styles from './Slider.module.scss'
import mySwiper from "../../utils/sliderFunction";
import slide1 from '../../assets/cases/Screenshot_1.png'
import slide2 from '../../assets/cases/Screenshot_2.png'
import slide3 from '../../assets/cases/Screenshot_3.png'
import slide4 from '../../assets/cases/Screenshot_4.png'
import slide5 from '../../assets/cases/Screenshot_5.png'
import slide6 from '../../assets/cases/Screenshot_6.png'
import slide7 from '../../assets/cases/Screenshot_7.png'
import {Link} from "react-router-dom";

export default function SectionSwiper() {
    const classes = `${styles.containerSwiper} container`;
    const itemClasses = `${styles.item} item`;
    const sliderClasses = `${styles.slider} slider`;
    const titleClasses = `${styles.title} title`;



    const slidesAlt = [
        {id: 1, img: slide1, text: 'Регистрация на турнир', path: '/work_case_1'},
        {id: 2, img: slide2, text: 'Ипотечный калькулятор', path: '/work_case_2'},
        {id: 3, img: slide3, text: 'Фильтрация квартир', path: '/work_case_3'},
        {id: 4, img: slide4, text: '"Infinite scroll" кнопка', path: '/work_case_4'},
        {id: 5, img: slide5, text: 'реализация фильтра', path: '/work_case_5'},
        {id: 6, img: slide6, text: 'Карточка квартиры', path: '/work_case_6'},
        {id: 6, img: slide7, text: 'Карточка квартиры', path: '/work_case_7'},
    ]

    const sliderRef = useRef(null);

    useEffect(() => {
        mySwiper();
    }, [sliderRef]);

    return (
        <div className={classes} id='swiper-container'>
            <h2 className={titleClasses} id='swiper-title'>
                Сложные кейсы с которыми сталкивался в работе
            </h2>
            <div className={sliderClasses} ref={sliderRef}>
                <div className={styles.sliderInner}>
                    {slidesAlt.map(slide => (
                        <div>
                            <Link to={slide.path}>
                                <div key={slide.id} className={itemClasses}>
                                    <div className={styles.single_slide}>
                                        <img src={slide.img} alt=""/>
                                    </div>
                                </div>
                            </Link>
                            <p className={styles.description}>{slide.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
