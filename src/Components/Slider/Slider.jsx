import React from 'react';
import styles from './Slider.module.scss'
import slide1 from '../../assets/slider/slide1.png'
import slide2 from '../../assets/slider/slide2.png'
import slide3 from '../../assets/slider/slide3.png'
import slide4 from '../../assets/slider/slide4.png'
import slide5 from '../../assets/slider/slide5.png'
import slide6 from '../../assets/slider/slide6.png'
import slide7 from '../../assets/slider/slide7.png'
import slide8 from '../../assets/slider/slide8.png'

const Slider = () => {

    const slider = [
        {id: 1, slide: slide1},
        {id: 2, slide: slide2},
        {id: 3, slide: slide3},
        {id: 4, slide: slide4},
        {id: 5, slide: slide5},
        {id: 6, slide: slide6},
        {id: 7, slide: slide7},
        {id: 8, slide: slide8},
    ]

    return (
        <div className={styles.slider}>
            {slider.map(slide =>
                <div className={styles.slide} key={slide.id}>
                    <img src={slide.slide} alt=""/>
                </div>
            )}
        </div>
    );
};

export default Slider;