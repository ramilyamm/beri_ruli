import React from 'react'
import s from './DetailsVacancy.module.css'
import ContentForm from '../MainPage/MainPageComponents/ContentForm/ContentForm'
import VacancyCard from '../Vacancy/VacancyComponent/VacancyCard/VacancyCard'
import VacancyVideo from '../Vacancy/VacancyComponent/VacancyVideo/VacancyVideo'
import BeriRuliCard from '../Vacancy/VacancyComponent/BerRuli/BeriRuliCard/BeriRuliCard'
import DetailPosition from './DetailsVacancyComponent/DetailPosition/DetailPosition'

const DetailsVacancy = () => {
	return (
		<main className={s.detail_vacancy}>
			<h2 className={s.headline}>
				<span>Главная - Вакансии</span> - Менеджер по продажам
			</h2>
			<DetailPosition />
			<div className={s.other_vacacncy}>
				<div className={s.detail_vacancy_title}>Другие вакансии компании</div>
				<div className={s.card_content}>
					<BeriRuliCard />
					<BeriRuliCard />
					<BeriRuliCard />
				</div>
			</div>
			<VacancyVideo />
			<VacancyCard />
			<ContentForm />
		</main>
	)
}

export default DetailsVacancy
