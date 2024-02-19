import React from 'react'
import s from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import insta from '../../assets/Bayaman/insta.png'
import wk1 from '../../assets/Bayaman/wk2.png'
import telega from '../../assets/Bayaman/telega.png'
import wk2 from '../../assets/Bayaman/wk.png'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<div className={s.block_info}>
					<div className={s.detail_info}>
						<div className={s.detail_info_block}>
							<p>
								<a href='#'>Ставрополь:</a> ул. Доваторцев, 21
							</p>
							<p>
								Главный офис: <a href='#'>г. Пятигорск ул.Бунимовича д.38</a>
							</p>
							<p>
								График работы: <a href='#'>Пн-Сб с 9:00 до 18:00</a>
							</p>
							<p>
								{' '}
								E-mail: <a href='mailto:'>avto@beri-ruli.ru</a>
							</p>
						</div>
						<div className={s.detail_info_number}>
							<a href='#'>+7 (962) 495 55 54</a>
						</div>
					</div>
					<div className={s.menu_info}>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
									}
									to={'/'}
								>
									Главная страница
								</NavLink>
							</li>
							<ul>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/arenda_avto'}
									>
										Аренда авто
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/catalog'}
									>
										Каталог
									</NavLink>
								</li>
							</ul>
						</ul>
					</div>
					<div className={s.menu_info}>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
									}
									to={'/for_investors'}
								>
									Для инвесторов
								</NavLink>
							</li>
							<ul>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/stock'}
									>
										Акции
									</NavLink>
								</li>
							</ul>
						</ul>
					</div>
					<div className={s.menu_info}>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
									}
									to={'/about_compony'}
								>
									О компании
								</NavLink>
							</li>
							<ul>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/vacancy'}
									>
										Вакансии
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/team'}
									>
										Команда
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/reviews'}
									>
										Отзывы
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/gallery'}
									>
										Галерея
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive ? `${s.menu_item} ${s.active}` : `${s.menu_item}`
										}
										to={'/photo'}
									>
										Фото
									</NavLink>
								</li>
							</ul>
						</ul>
					</div>
					<div className={s.menu_info}>
						<h3>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
								}
								to={'/dublicates'}
							>
								Дубликаты
							</NavLink>
						</h3>
						<h3>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
								}
								to={'/card_product'}
							>
								Карточка товара
							</NavLink>
						</h3>
						<h3>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
								}
								to={'/contacts'}
							>
								Контакты
							</NavLink>
						</h3>
						<h3>
							<NavLink
								className={({ isActive }) =>
									isActive ? `${s.menu_main} ${s.active}` : `${s.menu_main}`
								}
								to={'/enter_pers_acc'}
							>
								Личный кабинет
							</NavLink>
						</h3>
					</div>
				</div>
				<div className={s.block_link}>
					<div className={s.network_links}>
						<a href='#'>
							<img src={insta} alt='Instagram' />
						</a>
						<a href='#'>
							<img src={wk1} alt='WK1' />
						</a>
						<a href='#'>
							<img src={telega} alt='Telegram' />
						</a>
						<a href='#'>
							<img src={wk2} alt='WK2' />
						</a>
					</div>
					<h3>
						<a href='#'>Пользовательское соглашение</a>
					</h3>
					<h3>
						<a href='#'>Политика конфиденциальности</a>
					</h3>
					<h3>
						<a href='#'>Реквизиты компании</a>
					</h3>
				</div>
			</div>
			<div className={s.company_developers}>
				<div className={s.company_container}>
					<p>&copy; 2010-2021 ООО «Бери Рули»</p>
					<p>
						Разработка сайта <a href='#'>WEBELEMENT</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
