import React from 'react'
import s from './VacancyCard.module.css'
import image3 from '../../../../assets/Bayaman/vacan_1.png'
import image2 from '../../../../assets/Bayaman/vacan_2.png'
import image1 from '../../../../assets/Bayaman/vacan_3.png'

const VacancyCard = () => {
	return (
		<section className={s.vacancy_card}>
			<div className={s.cards}>
				<img src={image1} alt='Icon-Bg' />
				<h3 className={s.card_title}>
					Отчет о проведении специальной оценки условий труда ООО "Бери Рули"
				</h3>
			</div>
			<div className={s.cards}>
				<img src={image2} alt='Icon-Bg' />
				<h3 className={s.card_title}>Наша команда</h3>
			</div>
			<div className={s.cards}>
				<img src={image3} alt='Icon-Bg' />
				<h3 className={s.card_title}>О нас</h3>
			</div>
		</section>
	)
}

export default VacancyCard
