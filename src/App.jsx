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
					<WorkCase img={img3}
							  case_name='Фильтрация квартир'
							  case_description='В этом кейсе несмотря на то что фильтрация реализована на беке сложность состояла в том, чтобы совместить 2 фильтра.
							  Первый фильтра в виде компонента на главной странице, а второй аналогичный на странице с квартирами, и так же все это совместить с кнопкой "infinite scroll`a".
							  Тут мною было принято решение перенести всю логику фильтра в редакс и стейт из редакса формировал данные в запрос.
							  '
					/>}
				/>
				<Route path='/work_case_4' element={
					<WorkCase img={img4}
							  case_name='Кнопка "infinite scroll`a"'
							  case_description='Вся сложность в этой задачи заключалась в том что нужно корректно отображась количество недостающий/оставшихся квартир в зависимости от параметров фильтра.
							  У кнопки есть пару состояний внутренних которые передаются в запрос и подгружают квартиры. Все это реализовано через редакс.
							  '
					/>}
				/>
				<Route path='/work_case_5'
					   element={<WorkCase
						   img={img5}
						   case_name='Реализация фильтра'
						   case_description='В том кейсе сложность заключалась в том, что тут 4 инпута отвечающие за максимальную/минимальную цену или площдь.
						   Все это нужно было корректно сверстать, передать данные в стейты, а их уже после в запрос.
						   '
					   />}
				/>
				<Route path='/work_case_6'
					   element={<WorkCase img={img6}
										  case_name='Карточка квартиры'
										  case_description='В этом кейсе была сложность в том, что помимо карточки квартиры были еще карточки коммерческой недвижимости, и гаража.
										  Данные приходили в разном виде, но в дизайн макете карточка у всех одинаковая, поэтому приходилось в один и тот же компонент передавать разные данные из json.
										  И передавать их на 2-3 уроня вниз по дереву компонентов.
										  '
					   />}
				/>
				<Route path='/work_case_7'
					   element={<WorkCase img={img7}
										  case_name='Функционал бокового модального окна'
										  case_description='В проекте есть 3 боковые модалки, все они передают данные в админ панель и там дальше информацию обрабатывают менеджеры.
										  Все эти модалки связывались с телеграмм ботом и отсылали уведомления для менеджеров.
										  '
					   />}
				/>
			</Routes>
			<Footer/>
		</>

	);
};

export default App;
