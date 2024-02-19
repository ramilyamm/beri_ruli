import React from 'react'
import s from './ContactUs.module.css'
import phone from '../../../../assets/Bayaman/phone.png'
import email from '../../../../assets/Bayaman/email.png'

const ContactUs = () => {
	return (
		<section className={s.contact_us}>
			<div className={s.block_phone}>
				<img className={s.contact_img} src={phone} alt='Phone' />
				<p className={s.text}>
					По вопросам трудоустройства обращайтесь по телефону:{' '}
					<span>8 (962) 022 85 01, HR-специалист - Алина</span>
				</p>
			</div>
			<span className={s.line}></span>
			<div className={s.block_email}>
				<img className={s.contact_img} src={email} alt='Email' />
				<p className={s.text}>
					Резюме с указанием вакансии присылайте по адресу:{' '}
					<span>rabota@beri-ruli.ru HR-специалист - Алина</span>
				</p>
			</div>
		</section>
	)
}

export default ContactUs
