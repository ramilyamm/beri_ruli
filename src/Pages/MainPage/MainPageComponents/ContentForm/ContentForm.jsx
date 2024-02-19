import React from 'react'
import s from './ContentForm.module.css'

const ContentForm = () => {
	return (
		<section className={s.content_form}>
			<div className={s.wrapper}>
				<div className={s.content}>
					<h2 className={s.content_title}>
						Остались вопросы? <span>Свяжитесь с нами</span>
					</h2>
					<p className={s.content_text}>
						Если вы столкнулись с трудностями при работе с Бери Рули, у Вас есть
						какие-то замечания или предложения — позвоните.{' '}
						<span>Прием звонков с 09:00 до 18:00</span>
					</p>
					<p className={s.content_number}>+7 (962) 495 55 54</p>
				</div>
				<div className={s.form}>
					<form>
						<input type='text' placeholder='Ваше имя' />
						<input type='number' placeholder='Номер телефона' />
						<input type='text' placeholder='Ваш вопрос' />
						<div className={s.form_block}>
							<input type='checkbox' name='agree' />
							<label for='agree'>
								Согласие на обработку персональных данных
							</label>
							<button>Задать вопрос</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContentForm
