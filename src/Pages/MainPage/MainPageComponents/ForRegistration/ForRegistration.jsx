import React from 'react'
import s from './ForRegistration.module.css'
import bg from '../../../../assets/Bayaman/bg_registr.png'
import car from '../../../../assets/Bayaman/car_icon_reg.png'
import globe from '../../../../assets/Bayaman/globe_icon_reg.png'
import coin from '../../../../assets/Bayaman/coin_icon_reg.png'

const ForRegistration = () => {
	return (
		<section className={s.for_registration}>
			<h2 className={s.f_registr_title}>Для офомления понадобятся только:</h2>
			<div className={s.f_registr_content}>
				<div className={s.card}>
					<img className={s.bg} src={bg} alt='BgFone' />
					<img className={s.card_icon} src={car} alt='Icons' />
					<h3 className={s.card_title}>Права</h3>
				</div>
				<div className={s.card}>
					<img className={s.bg} src={bg} alt='BgFone' />
					<img className={s.card_icon} src={globe} alt='Icons' />
					<h3 className={s.card_title}>Паспорт</h3>
				</div>
				<div className={s.card}>
					<img className={s.bg} src={bg} alt='BgFone' />
					<img className={s.card_icon} src={coin} alt='Icons' />
					<h3 className={s.card_title}>Первый взнос</h3>
				</div>
			</div>
		</section>
	)
}

export default ForRegistration
