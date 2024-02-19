import React from 'react'
import s from './StepsToGetAuto.module.css'
import block from '../../../../assets/Bayaman/get_auto_block.png'
import block_product from '../../../../assets/Bayaman/card_product_block.png'

const StepsToGetAuto = ({ params }) => {
	const isParams = !!params
	return (
		<section className={s.steps_to_get_auto}>
			<div className={s.wrapper}>
				<h2 className={s.get_auto_title}>
					Получить автомобиль легко <span>всего 4 шага и 30 минут времени</span>
				</h2>
				<p className={s.get_auto_text}>Срок выкупа — от 3 месяцев до 2 лет</p>
				<div className={s.get_auto_content}>
					<div className={s.card}>
						<div className={s.card_title}>
							<img src={isParams ? block_product : `${block}`} alt='block' />
							<h3>1. Шаг</h3>
						</div>
						<div className={s.card_content}>
							<p>
								<span>Выбирайте</span> автомобиль на сайте или сразу приезжайте
								в наш офис. Уточнить время можно по телефону
							</p>
						</div>
						<p className={s.card_number}>8 800 456</p>
						<button>Заказать звонок</button>
					</div>
					<div className={s.card}>
						<div className={s.card_title}>
							<img src={isParams ? block_product : `${block}`} alt='block' />
							<h3>2. Шаг</h3>
						</div>
						<div className={s.card_content}>
							<p>
								<span>Вместе</span> рассчитаем первый взнос и удобный
								ежемесячный платеж. Сумму платежа потом можно изменить. Первый
								взнос можно внести сразу или в рассрочку в течение 10 дней
							</p>
						</div>
					</div>
					<div className={s.card}>
						<div className={s.card_title}>
							<img src={isParams ? block_product : `${block}`} alt='block' />
							<h3>3. Шаг</h3>
						</div>
						<div className={s.card_content}>
							<p>
								<span>Заключаем</span> договор и создаем для вас личный кабинет
								на сайте, где будет отражаться вся история взносов
							</p>
						</div>
					</div>
					<div className={s.card}>
						<div className={s.card_title}>
							<img src={isParams ? block_product : `${block}`} alt='block' />
							<h3>4. Шаг</h3>
						</div>
						<div className={s.card_content}>
							<p>
								<span>Передаем</span> вам ключи от автомобиля. У вас есть 24
								часа на тест-драйв — чтобы убедиться, что именно этот автомобиль
								вам подходит
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StepsToGetAuto
