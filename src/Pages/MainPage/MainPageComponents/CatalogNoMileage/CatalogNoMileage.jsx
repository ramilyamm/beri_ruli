import React, { useState } from 'react'
import s from './CatalogNoMileage.module.css'
import car1 from '../../../../assets/Bayaman/car1_card.png'
import car2 from '../../../../assets/Bayaman/card2_card.png'
import car3 from '../../../../assets/Bayaman/car3_card.png'
import { Link } from 'react-router-dom'

const CatalogNoMileage = ({ text, params, card_text }) => {
	const hasParams = !!params
	return (
		<section
			className={`${s.catalog_no_mileage} ${hasParams ? s.product_card : ''}`}
		>
			<div className={`${s.catalog_title} ${hasParams ? s.no_display : ''}`}>
				<h2>{text}</h2>
				<Link to={'/catalog'}>
					<button>Смотреть весь каталог</button>
				</Link>
			</div>
			<div className={s.catalog_content}>
				<div className={s.card}>
					<div className={s.card_image}>
						<img src={car1} alt='car' />
						<div className={s.card_image_text}>
							<h3>VIN-номера проверены</h3>
							<h3>VIN-номера проверены</h3>
						</div>
					</div>
					<div className={s.card_content}>
						<p className={s.card_mileage}>Без пробега</p>
						<h3 className={s.card_title}>
							Ваз (Lada) Гранта седан Comfort 16 КЛ
						</h3>
						<p className={s.card_text}>Год выпуска 2021</p>
						<div className={s.card_info}>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Аренда с выкупом</p>
								<p className={s.info_block_price}>1 300 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Рассрочка</p>
								<p className={s.info_block_price}>1 200 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Наличные</p>
								<p className={s.info_block_price}>1 100 руб/сутки</p>
							</div>
						</div>
					</div>
					<Link to={'/card_product'}>
						<button className={s.card_btn}>Полные характеристики</button>
					</Link>
				</div>
				<div className={s.card}>
					<div className={s.card_image}>
						<img src={car2} alt='car' />
						<div className={s.card_image_text}>
							<div className={s.card_img_block}>
								<div>
									<h3>{card_text}</h3>
									<h3>VIN-номера проверены</h3>
								</div>
								<h4 className={s.card_soon}>Скоро в продаже</h4>
							</div>
						</div>
					</div>
					<div className={s.card_content}>
						<p className={s.card_mileage}>Без пробега</p>
						<h3 className={s.card_title}>
							Ваз (Lada) Гранта седан Comfort 16 КЛ
						</h3>
						<p className={s.card_text}>Год выпуска 2021</p>
						<div className={s.card_info}>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Аренда с выкупом</p>
								<p className={s.info_block_price}>1 300 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Рассрочка</p>
								<p className={s.info_block_price}>1 200 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Наличные</p>
								<p className={s.info_block_price}>1 100 руб/сутки</p>
							</div>
						</div>
					</div>
					<Link to={'/card_product'}>
						<button className={s.card_btn_second}>Полные характеристики</button>
					</Link>
				</div>
				<div className={s.card}>
					<div className={s.card_image}>
						<img src={car3} alt='car' />
						<div className={s.card_image_text}>
							<h3>VIN-номера проверены</h3>
							<h3>VIN-номера проверены</h3>
						</div>
					</div>
					<div className={s.card_content}>
						<p className={s.card_mileage}>Без пробега</p>
						<h3 className={s.card_title}>
							Ваз (Lada) Гранта седан Comfort 16 КЛ
						</h3>
						<p className={s.card_text}>Год выпуска 2021</p>
						<div className={s.card_info}>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Аренда с выкупом</p>
								<p className={s.info_block_price}>1 300 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Рассрочка</p>
								<p className={s.info_block_price}>1 200 руб/сутки</p>
							</div>
							<div className={s.info_block}>
								<p className={s.info_block_title}>Наличные</p>
								<p className={s.info_block_price}>1 100 руб/сутки</p>
							</div>
						</div>
					</div>
					<Link to={'/card_product'}>
						<button className={s.card_btn}>Полные характеристики</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default CatalogNoMileage
