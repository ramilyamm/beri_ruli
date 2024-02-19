import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/Azat/logo.png'
import Vector from '../../assets/Azat/Vector.png'
import Vector_tel from '../../assets/Azat/Vector tel.png'
import personVector from '../../assets/Azat/vector person.png'
import arrow from '../../assets/Azat/Arrow.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header} >
            <div className={s.header_top} >
                <p>Спецпредложение: купи авто по цене и получи дубликаты госномеров в подарок!</p>
                <span>&#10006;</span>
            </div>
            <div className={s.header_middle} >
                <div className={s.middle_left} >
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div>
                        <h4>Аренда автомобилей с выкупом №1 на Юге России </h4>
                        <p>Выгодные и честные условия </p>
                    </div>
                </div>
                <div className={s.middle_right} >
                    <div className={s.left_shoulder} >
                        <div><img src={Vector} alt="logo" /></div>
                        <div className={s.in_left_shoulder}>
                            <h4>Ставрополь ул. Доваторцев, 21</h4>
                            <p>Выбрать город</p>
                        </div>
                    </div>
                    <div className={s.rigth_shoulder}>
                        <div><img src={Vector_tel} alt="logo" /></div>
                        <div className={s.in_rigth_shoulder}>
                            <a href="https://wa.me/996705240820?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...">8 (962) 495-55-54</a>
                            <p>Заказать звонок</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.header_bottom}>
                <nav>
                    <ul className={s.ul_in_header}>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/'} >Главная страница<img className={s.arrow_in} src={arrow} alt="logo" /></NavLink>
                            <ul>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.menu_item} ${s.avtive}` : `${s.menu_item}`
                                    }
                                        to={'/arenda_avto'}>Аренда авто</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.menu_item} ${s.avtive}` : `${s.menu_item}`
                                    }
                                        to={'/catalog'}>Каталог</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/for_investors'}>Для инвесторов<img className={s.arrow_in} src={arrow} alt="logo" /></NavLink>
                            <ul>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                                    }
                                        to={'/stock'}>Акции</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/dublicates'}>Дубликаты</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/card_product'}>Карточка товара</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/about_compony'}>О компании <img className={s.arrow_in} src={arrow} alt="logo" /></NavLink>
                            <ul>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.menu_item} ${s.avtive}` : `${s.menu_item}`
                                    }
                                        to={'/vacancy'}>Вакансии</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                                    }
                                        to={'/team'}>Команда </NavLink>
                                </li>

                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                                    }
                                        to={'/reviews'}>Отзывы</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                                    }
                                        to={'/gallery'}>Галерея</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                                    }
                                        to={'/photo'}>Фото</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/contacts'}>Контакты</NavLink>
                        </li>
                        <span className={s.between}>  </span>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                            }
                                to={'/enter_pers_acc'}><img className={s.vector_in} src={personVector} alt="logo" /> Личный кабинет</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;