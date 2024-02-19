import React from 'react'
import s from './NextMove.module.css'
import quest1 from '../../../../assets/Bayaman/next_move_img1.png'
import quest2 from '../../../../assets/Bayaman/next_move_img2.png'
import arrow from '../../../../assets/Bayaman/form_arrow.png'
import line from '../../../../assets/Bayaman/form_line.png'

const NextMove = () => {
	return (
		<section className={s.next_move}>
			<img className={s.quest_image_first} src={quest1} alt='Question' />
			<img className={s.quest_image_second} src={quest2} alt='Question' />
			<div className={s.wrapper}>
				<h2 className={s.wrapper_title}>А что потом?</h2>
				<div className={s.wrapper_content}>
					<div className={s.content_block}>
						<p className={s.content_text}>
							<span>Вносите</span> регулярный платеж каждый месяц. Платеж
							включает сумму аренды. Сами выбираете сумму для выплат. В среднем
							это от 18 000 тысяч в месяц
						</p>
					</div>

					<div className={s.content_block}>
						<img className={s.line} src={line} alt='dotterLine' />
						<img className={s.form_arrow} src={arrow} alt='Arrow' />
						<p className={s.content_text}>
							История платежей и напоминание о следующей оплате будут отражаться
							в личном кабинете прямо на сайте.{' '}
							<span>10 дней отсрочка платежа</span>, если в этом месяце что-то
							пошло не так Успеете поправить свои дела и внести платеж
						</p>
					</div>
					<div className={s.content_block}>
						<img className={s.line} src={line} alt='dotterLine' />
						<img className={s.form_arrow} src={arrow} alt='Arrow' />
						<p className={s.content_text}>
							<span>После внесение последнего платежа</span> переоформляем
							автомобиль на вас и отдаем полный пакет документов
						</p>
					</div>
					<div className={s.content_block}>
						<p className={s.content_text}>
							<span>Если хотите выкупить автомобиль раньше срока</span>— это
							можно сделать в любой день. Мы не берем никаких комиссий. Просто
							вносите остаток суммы, и мы передаем вам документы на машину.
						</p>
					</div>

					<div className={s.content_block}>
						<img className={s.line} src={line} alt='dotterLine' />
						<img className={s.form_arrow} src={arrow} alt='Arrow' />
						<p className={s.content_text}>
							<span>Персональный менеджер</span>, который всегда поможет. Если
							попали в ДТП, нужна отсрочка платежа или есть вопрос
						</p>
					</div>
					<div className={s.content_block}>
						<img className={s.line} src={line} alt='dotterLine' />
						<img className={s.form_arrow} src={arrow} alt='Arrow' />
						<p className={s.content_text}>
							<span>Скидка 20%</span>
							на выкуп всех последующих автомобилей
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NextMove
