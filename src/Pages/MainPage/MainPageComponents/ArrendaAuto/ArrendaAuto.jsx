import React from 'react'
import s from './ArrendaAuto.module.css'
import tick from '../../../../assets/Bayaman/tick.png'

const ArrendaAuto = () => {
	return (
		<section className={s.rent_auto}>
			<h2 className={s.rent_title}>
				<span>Аренда с выкупом</span> автомобиля с нами — это:
			</h2>
			<div className={s.rent_content}>
				<div className={s.content_item}>
					<img src={tick} alt='Tick' />
					<p>
						Всегда не менее <span>25 автобомобилей на ваш выбор</span>
					</p>
				</div>
				<div className={s.content_item}>
					<img src={tick} alt='Tick' />
					<p>
						<span>Официальные договор</span> и прозрачные условия
					</p>
				</div>
				<div className={s.content_item}>
					<img src={tick} alt='Tick' />
					<p>
						<span>Доступ в личный кабинет</span> с историей платежей и
						прогрессом выплат
					</p>
				</div>
				<div className={s.content_item}>
					<img src={tick} alt='Tick' />
					<p>
						<span>Персональный менеджер</span>, который всегда поможет
					</p>
				</div>
			</div>
		</section>
	)
}

export default ArrendaAuto
