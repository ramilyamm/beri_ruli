import React from 'react'
import s from './Vacancy.module.css'
import ContentForm from '../MainPage/MainPageComponents/ContentForm/ContentForm'
import BerRuli from './VacancyComponent/BerRuli/BerRuli'
import ContactUs from './VacancyComponent/ContactUs/ContactUs'
import VacancyVideo from './VacancyComponent/VacancyVideo/VacancyVideo'
import VacancyCard from './VacancyComponent/VacancyCard/VacancyCard'

const Vacancy = () => {
	return (
		<main className={s.vacancy}>
			<p className={s.vacancy_title}>
				<span>Главная</span> - Вакансии
			</p>
			<BerRuli />
			<ContactUs />
			<VacancyVideo />
			<VacancyCard />
			<ContentForm />
		</main>
	)
}

export default Vacancy
