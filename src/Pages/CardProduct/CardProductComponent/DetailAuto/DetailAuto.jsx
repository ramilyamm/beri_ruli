import React, { useEffect, useState } from 'react'
import s from './DetailAuto.module.css'
import Swipers from './Swiper/Swiper'
import swiper1 from '../../../../assets/Bayaman/swiper1.png'
import swiper2 from '../../../../assets/Bayaman/swiper2.png'
import swiper3 from '../../../../assets/Bayaman/swiper3.png'
import swiper4 from '../../../../assets/Bayaman/swiper4.png'
import swiper5 from '../../../../assets/Bayaman/swiper5.png'
import swiper_big_bro from '../../../../assets/Bayaman/swiper_big_bro.png'
import arrow_left from '../../../../assets/Bayaman/arrow_left.png'
import arrow_right from '../../../../assets/Bayaman/arrow_right.png'
import arrow_down from '../../../../assets/Bayaman/arrow_down.png'
import rectangle from '../../../../assets/Bayaman/reactangle.png'
import quest1 from '../../../../assets/Bayaman/_.png'
import quest2 from '../../../../assets/Bayaman/_ (1).png'
import quest3 from '../../../../assets/Bayaman/quest1.png'

const DetailAuto = () => {
	const [showDropdown, setShowDropdown] = useState(false)

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown)
	}

	return (
		<section className={s.detail_auto}>
			<div className={s.block_info}>
				<div className={s.auto_options}>
					<h1 className={s.options_title}>
						ВАЗ (Lada) 217230 (Приора Хетчбек)
					</h1>
					<p className={s.options_text}>Код: 833</p>
					<div className={s.price}>
						<h2 className={s.price_title}>Цена</h2>
						<div className={s.price_info}>
							<div className={s.price_item}>
								<p>
									<span>Аренда с выкупом</span>
								</p>
								<p>
									<span>1 3000 руб</span>
								</p>
							</div>
							<div className={s.price_item}>
								<p>Рассрочка</p>
								<p>1 200 руб</p>
							</div>
							<div className={s.price_item}>
								<p>Наличные</p>
								<p>1 100 руб</p>
							</div>
						</div>
						<div className={s.other_options}>
							<div className={s.other_options_item}>
								<p>Год выпуска</p>
								<p>
									<span>2011</span>
								</p>
							</div>
							<div className={s.other_options_item}>
								<p>Пробег</p>
								<p>
									<span>90784</span>
								</p>
							</div>
							<div className={s.other_options_item}>
								<p>Трансмиссия</p>
								<p>
									<span>Механическая</span>
								</p>
							</div>
						</div>
					</div>
					<div className={s.dropdown}>
						<button onClick={toggleDropdown} className={s.nut_dropdown}>
							Дополнительные опции{' '}
							<img className={s.arrow_down} src={arrow_down} alt='Arrow' />
						</button>
						{showDropdown && (
							<div className={s.dropdown_list}>
								<p>ĐКолонки р 13</p>
								<p>Магнитола</p>
								<p>Стеклоподъемники</p>
								<p>Центр. замок</p>
								<p>Электроуселитель (ЭУР)</p>
							</div>
						)}
					</div>
				</div>
				<div className={s.auto_conditions}>
					<h2 className={s.condition_title}>Условия</h2>
					<div className={s.condition_card}>
						<div className={s.card_content}>
							<h3 className={s.content_title}>Аренда с выкупом</h3>
							<div className={s.content_wrapper}>
								<div className={s.content_block}>
									<p>Первоначальный взнос</p>
									<p>Ежемесячный платеж</p>
									<p>Минимальный срок выкупа</p>
									<p className={s.content_block_long_text}>
										Средний срок выкупа похожих автомобилей:
									</p>
								</div>
								<div className={s.card_text}>
									<p>от 30 000 ₽ (Рассрочка до 10 дней)</p>
									<p>от 18 000 ₽</p>
									<p>Отсутсвует. Выкуп в любой день без комиссии</p>
									<p>11 месяцев</p>
								</div>
							</div>
						</div>
					</div>
					<div className={s.condition_card}>
						<div className={s.card_content}>
							<h3 className={s.content_title}>Рассрочка</h3>
							<div className={s.content_wrapper}>
								<div className={s.content_block}>
									<p>
										<span>Б/у под выкуп</span>
									</p>
									<p>Первоначальный взнос:</p>
								</div>
								<div className={s.card_text}>
									<p className={s.long_text}>
										30 000 ₽, 2 000 ₽ в день, срок выплат зависит от пробега —
										чем больше пробег, тем меньше срок выкупа. Рассчитывается
										индивидуально для каждого авто
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={s.condition_card}>
						<div className={s.card_content}>
							<h3 className={s.content_title}>Наличные</h3>
							<div className={s.content_wrapper}>
								<div className={s.content_block}>
									<p>Первоначальный взнос</p>
									<p>Ежемесячный платеж</p>
									<p>Минимальный срок выкупа</p>
									<p className={s.content_block_long_text}>
										Средний срок выкупа похожих автомобилей:
									</p>
								</div>
								<div className={s.card_text}>
									<p>от 30 000 ₽ (Рассрочка до 10 дней)</p>
									<p>от 18 000 ₽</p>
									<p>Отсутсвует. Выкуп в любой день без комиссии</p>
									<p>11 месяцев</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.contact_info}>
					<img src={rectangle} alt='Card' />
					<div className={s.image_text}>
						<p className={s.image_question}>
							Остались вопросы? Узнать подробнее об автомобиле
						</p>
						<p className={s.image_number}>+7 906 477 88 00</p>
					</div>
					<img className={s.img_quest_top} src={quest1} alt='Question' />
					<img className={s.img_quest_middle} src={quest2} alt='Question' />
					<img className={s.img_quest_bottom} src={quest3} alt='Question' />
				</div>
			</div>
			<div className={s.swiper}>
				<img src={swiper_big_bro} alt='Car' />
				<div className={s.swiper_content}>
					<img className={s.swiper_arrow} src={arrow_left} alt='Arrow' />
					<img src={swiper1} alt='Car' />
					<img src={swiper2} alt='Car' />
					<img src={swiper3} alt='Car' />
					<img src={swiper4} alt='Car' />
					<img src={swiper5} alt='Car' />
					<img className={s.swiper_arrow} src={arrow_right} alt='Arrow' />
				</div>
				<button>Заявка на приобритение авто</button>
			</div>
			{/* <Swipers /> */}
		</section>
	)
}

export default DetailAuto
