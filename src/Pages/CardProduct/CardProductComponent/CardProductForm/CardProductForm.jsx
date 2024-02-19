import React from 'react'
import s from './CardProductForm.module.css'
import first from '../../../../assets/Bayaman/1.png'
import second from '../../../../assets/Bayaman/2.png'

const CardProductForm = () => {
	return (
		<section className={s.card_prod_form}>
			<div className={s.content}>
				<h2 className={s.content_title}>
					<span>Хотите автомобиль</span>, которого нет в каталоге или он уже
					продан?
				</h2>
				<div className={s.content_block}>
					<img src={first} alt='Number' />
					<p>
						Позвоните менеджеру — попробуем найти эту или похожую модель
						автомобиля специально для вас.{' '}
					</p>
				</div>
				<div className={s.content_block}>
					<img src={second} alt='Number' />
					<p>
						Если не найдем сейчас — внесем вас в базу и сообщим, как только
						что-то похожее появится в продаже.
					</p>
				</div>
			</div>
			<div className={s.form}>
				<form>
					<input type='text' placeholder='Ваше имя' />
					<input type='number' placeholder='Номер телефона' />
					<input type='text' placeholder='Ваш вопрос' />
					<div className={s.form_block}>
						<input type='checkbox' name='agree' />
						<label for='agree'>Согласие на обработку персональных данных</label>
						<button>Задать вопрос</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default CardProductForm
