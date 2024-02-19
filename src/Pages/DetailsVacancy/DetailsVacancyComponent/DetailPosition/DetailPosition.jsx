import React from 'react'
import s from './DetailPosition.module.css'
import tick from '../../../../assets/Bayaman/tick.png'
import { Link } from 'react-router-dom'
import phone from '../../../../assets/Bayaman/phone.png'
import email from '../../../../assets/Bayaman/email.png'

const DetailPosition = () => {
	return (
		<section className={s.detail_position}>
			<div className={s.position_content}>
				<h1 className={s.position_title}>Менеджер по продажам</h1>
				<p className={s.title_text}>
					Работа в офисе в Пятигорске
					<span>от 25 000 ₽</span>
				</p>
				<p className={s.title_undertext}>*Оклад+% от продаж "без потолка"</p>
				<div className={s.condition}>
					<h2 className={s.condition_title}>Условия</h2>
					<div className={s.condition_content}>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								График работы: с 8:30 до 17:30 5\2, 6\1 (без задержек и
								переработок)
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								Своевременная заработная плата: оклад+% от продаж "без потолка"
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Прозрачная мотивация (вы сами считаете свою зарплату)</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Выплата два раза в месяц: аванс+ зарплата</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Оплачиваемый испытательный срок</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Оформление по ТК РФ</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Лояльное отношение к сотрудникам</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Интересные задачи</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								Обучение (компания не только поставит задачу, но и научит как ее
								эффективно выполнить)
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								Этапы общения с клиентами уже прописаны (вам не нужно изобретать
								велосипед)
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Доступ к библиотеке компании (мы за развитие)</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								Оборудованное рабочее место в просторном офисе (оборудованное
								помещение для приема пищи тоже есть)
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Рабочее авто,корпоративная связь,компьютер,смартфон</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Дни спорта и совместного досуга</p>
						</div>
					</div>
				</div>
				<div className={s.requirement}>
					<h2 className={s.requirement_title}>Требования</h2>
					<div className={s.condition_content}>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Опыт работы в сфере продаж (не менее 1 года)</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Знание техник продаж и умение применять их на практике</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>
								Опыт ведения переговоров, коммуникабельность, быстрая
								обучаемость
							</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Водительское удостоверение кат В (стаж значения не имеет)</p>
						</div>
						<div className={s.content_item}>
							<img src={tick} alt='tick' />
							<p>Желание развиваться в продажах и хорошо зарабатывать</p>
						</div>
					</div>
					<div className={s.responsibilities}>
						<h2 className={s.responsibilities_title}>Требования</h2>
						<div className={s.condition_content}>
							<div className={s.content_item}>
								<img src={tick} alt='tick' />
								<p>
									Работа со входящими звонками, обработка запросов с сайта и
									авито
								</p>
							</div>
							<div className={s.content_item}>
								<img src={tick} alt='tick' />
								<p>Прямые продажи в офисе</p>
							</div>
							<div className={s.content_item}>
								<img src={tick} alt='tick' />
								<p>Проведение тест- драйвов</p>
							</div>
							<div className={s.content_item}>
								<img src={tick} alt='tick' />
								<p>Оформление и заключение договоров</p>
							</div>
							<div className={s.content_item}>
								<img src={tick} alt='tick' />
								<p>Работа в системе СRM (обучаем)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.position_contact_us}>
				<Link to={'/vacancy'}>
					<button>Назад в вакансии</button>
				</Link>
				<div className={s.contact_us_block}>
					<div className={s.contact_block_item}>
						<img src={phone} alt='Phone' />
						<p className={s.contact_block_text}>
							По вопросам трудоустройства обращайтесь по телефону:{' '}
							<span>8 (962) 022 85 01, HR-специалист - Алина</span>
						</p>
					</div>
					<div className={s.contact_block_item}>
						<img src={email} alt='Email' />
						<p className={s.contact_block_text}>
							Резюме с указанием вакансии присылайте по адресу:{' '}
							<span>rabota@beri-ruli.ru HR-специалист - Алина</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DetailPosition
