import React from 'react';
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import styles from './App.module.scss'
import Layout from "./Layout/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import WorkCase from "./pages/WorkCase";
import img1 from '../src/assets/cases/Screenshot_1.png'
import img2 from '../src/assets/cases/Screenshot_2.png'
import img3 from '../src/assets/cases/Screenshot_3.png'
import img4 from '../src/assets/cases/Screenshot_4.png'
import img5 from '../src/assets/cases/Screenshot_5.png'
import img6 from '../src/assets/cases/Screenshot_6.png'
import img7 from '../src/assets/cases/Screenshot_7.png'

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Layout/>}/>
                <Route path='/work_case_1' element={
                    <WorkCase img={img1}
                              case_name='Регистрация на турнир'
                              case_description='На первый взгляд это легкая задача,
                              и это правда когда у вас есть опыт, api, бд, и все вот это. А когда ты зеленый новичек,
                              тебя ждут 1200 участников турнира, и тебе нужно быстро "родить" регистрацию, то это серьезный тест на "стресс".
                              Как я решил задачу? Поскольку у меня была только задача, смекалка и я сам, я решил сделать всю задачу на фронте, собирал все данные в гугл документах,
                              связывал все это через googleSheetsApi, там собирал все по полям которые выводились в excel документах.
                              '
                    />}
                />
                <Route path='/work_case_2' element={
                    <WorkCase img={img2}
                        case_name='Ипотечный калькулятор'
                              case_description='Вот это уже была задача не из легких. В чем была сложность, помимо корректной работы формул, это связывание колесика с инпутами у которых type="range.
                                При это цена из правого компонента должна была выводится в левый соотвественно пришлось логика сначала выносить до ближайшего общего компонента,
                                а потом и декомпозировать в ввиде отдельных функций в другую папку. Так же задачу очень сильно осложняли табы в виде вида ипотеки,
                                то есть под табами были зашиты проценты, проценты приходили с api в виде json.
                              '
                    />}
                />
                <Route path='/work_case_3' element={
                    <WorkCase img={img3}/>}

                />
                <Route path='/work_case_4' element={<WorkCase img={img4}/>}/>
                <Route path='/work_case_5' element={<WorkCase img={img5}/>}/>
                <Route path='/work_case_6' element={<WorkCase img={img6}/>}/>
            </Routes>
            <Footer/>
        </>

    );
};

export default App;
