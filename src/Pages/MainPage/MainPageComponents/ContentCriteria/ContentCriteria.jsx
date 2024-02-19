import React from 'react'
import s from './ContentCriteria.module.css'
import tick from '../../../../assets/Bayaman/tick.png'

const ContentCriteria = () => {
	return (
		<section className={s.content_criteria}>
			<div className={s.wrapper}>
				<h2 className={s.criteria_title}>Мы подходим вам, если:</h2>
				<div className={s.wrapper_content}>
					<div className={s.criteria_item}>
						<img src={tick} alt='Tick' />
						<p>Вы хотите приобрести авто уже сегодня</p>
					</div>
					<div className={s.criteria_item}>
						<img src={tick} alt='Tick' />
						<p>Вы хотите экономить на ежемесячном платеже за свой автомобиль</p>
					</div>
					<div className={s.criteria_item}>
						<img src={tick} alt='Tick' />
						<p>Хотите купить авто под такси</p>
					</div>
					<div className={s.criteria_item}>
						<img src={tick} alt='Tick' />
						<p>Вам не одобряют кредит в банке</p>
					</div>
					<div className={s.criteria_item}>
						<img src={tick} alt='Tick' />
						<p>
							Вам нужно приобрести несколько автомобилей на выгодных условиях
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentCriteria
