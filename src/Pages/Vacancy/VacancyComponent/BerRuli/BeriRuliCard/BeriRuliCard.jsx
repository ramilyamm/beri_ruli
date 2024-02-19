import React from 'react'
import s from './BeriRuliCard.module.css'
import location from '../../../../../assets/Bayaman/loc_card.svg'
import { Link } from 'react-router-dom'

const BeriRuliCard = () => {
	return (
		<div className={s.card}>
			<div className={s.location}>
				<img className={s.loact_image} src={location} alt='Icon' />
				<p className={s.locat_name}>Офис в Пятигорске</p>
			</div>
			<p className={s.position}>Менеджер по продажам</p>
			<p className={s.salary}>от 25 000 ₽</p>
			<Link to={'/detail_vacancy'}>
				<button className={s.card_btn}>Подробнее о позиции</button>
			</Link>
		</div>
	)
}

export default BeriRuliCard
