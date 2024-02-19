import React from 'react'
import s from './ContentAuto.module.css'
import car from '../../../../assets/Bayaman/main_car.png'
import rec_blue from '../../../../assets/Bayaman/rac_blue.png'
import rec_grey from '../../../../assets/Bayaman/rec_grey.png'
import { Link } from 'react-router-dom'

const ContentAuto = () => {
	return (
		<section className={s.content_auto}>
			<div className={s.rent}>
				<div className={s.rent_content}>
					<h1 className={s.rent_title}>
						Аренда автомобиля с выкупом в Ставрополе от{' '}
						<span>530 ₽ в сутки</span>
					</h1>
					<h3 className={s.rent_text}>
						Удобнее и выгоднее, чем копить на машину
					</h3>
					<Link to={'/catalog'}>
						<button className={s.rent_btn}>Смотреть каталог авто</button>
					</Link>
				</div>
				<div className={s.rent_image}>
					<img className={s.menu_car} src={car} alt='car' />
					<img className={s.rec_blue} src={rec_blue} alt='Rectangle Blue' />
					<img className={s.rec_grey} src={rec_grey} alt='Rectangle Grey' />
				</div>
			</div>
			<div className={s.no_credit}>
				<div className={s.no_credit_content}>
					<h2 className={s.no_credit_title}>Без кредита</h2>
					<p className={s.no_credit_text}>
						Оформив аренду авто с последующим выкупом, вы можете сразу же
						получить автомобиль в свое распоряжение, погашая его стоимость
						частями.
					</p>
				</div>
				<div className={s.no_credit_card}>
					<div className={s.card_item}>
						<h3 className={s.card_title}>Нужен только паспорт и права</h3>
						<p className={s.card_text}>
							Не нужна справка с места работы и кредитная история
						</p>
					</div>
					<div className={s.card_item}>
						<h3 className={s.card_title}>0% комиссий</h3>
						<p className={s.card_text}>
							Выкуп авто в любой момент без комиссий
						</p>
					</div>
					<div className={s.card_item}>
						<h3 className={s.card_title}>Регулируйте сумму выплат</h3>
						<p className={s.card_text}>
							Сами выбираете сумму для выплат от 18 000 тысяч в месяц
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentAuto
