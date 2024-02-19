import React from 'react'
import s from './ContentBenefit.module.css'
import tick from '../../../../assets/Bayaman/tick.png'
import coin from '../../../../assets/Bayaman/coin1.png'
import payment from '../../../../assets/Bayaman/payment2.png'
import arrow_coin from '../../../../assets/Bayaman/money_arrow3.png'
import credit_card from '../../../../assets/Bayaman/credit_card4.png'
import prize from '../../../../assets/Bayaman/prize5.png'
import percent from '../../../../assets/Bayaman/percent6.png'

const ContentBenefit = () => {
	return (
		<section className={s.content_benefit}>
			<h2 className={s.benefit_title}>
				Выкупать автомобиль с нами <span>удобно, быстро и выгоднее</span> чем в
				банке
			</h2>
			<div className={s.benefit_info}>
				<div className={s.info_item}>
					<img src={tick} alt='Tick' />
					<p>
						<span>95% наших клиентов</span> выкупают автомобиль
					</p>
				</div>
				<div className={s.info_item}>
					<img src={tick} alt='Tick' />
					<p>
						<span>11 месяцев</span> среднее время выкупа в «Бери Рули»
					</p>
				</div>
			</div>
			<div className={s.benefit_detail_steps}>
				<div className={s.detail_steps_item}>
					<img src={coin} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>Нет фиксированной суммы взноса</h3>
						<p>
							Чтобы быстрее выкупить автомобиль — просто напишите об этом
							менеджеру
						</p>
					</div>
				</div>
				<div className={s.detail_steps_item}>
					<img src={payment} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>Возвращаем деньги</h3>
						<p>За не выкупленный автомобиль</p>
					</div>
				</div>
				<div className={s.detail_steps_item}>
					<img src={arrow_coin} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>Сами выбираете сумму для выплат</h3>
						<p>От 18 000 тысяч в месяц</p>
					</div>
				</div>
				<div className={s.detail_steps_item}>
					<img src={credit_card} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>10 дней отсрочка платежа</h3>
						<p>Успеете поправить свои дела и внести платеж</p>
					</div>
				</div>
				<div className={s.detail_steps_item}>
					<img src={prize} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>Дарим страховку ОСАГО на один год</h3>
					</div>
				</div>
				<div className={s.detail_steps_item}>
					<img src={percent} alt='Icon' />
					<div className={s.detail_steps_text}>
						<h3>Скидка 20% на выкуп</h3>
						<p>Всех последующих автомобилей</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBenefit
