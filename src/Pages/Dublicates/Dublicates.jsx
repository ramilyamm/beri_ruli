import React from 'react';
import s from './Dublicates.module.css'
import find from '../../assets/Ramilya/find_vector.png'
import time from '../../assets/Ramilya/time_five.png'
import verified from '../../assets/Ramilya/verified.png'
import verified_top from '../../assets/Ramilya/verified_top.png'
import pistol from '../../assets/Ramilya/pistol.png'
import pistol_line from '../../assets/Ramilya/pistol_line.png'
import num from '../../assets/Ramilya/num_1.png'
import passport_icon2 from '../../assets/Ramilya/passport_icon2.png'
import passport_icon1 from '../../assets/Ramilya/passport_icon1.png'
import passport_icon4 from '../../assets/Ramilya/passport_icon4.png'
import licenses_down from '../../assets/Ramilya/licenses_down.png'
import licenses_middle from '../../assets/Ramilya/licenses_middle.png'
import licenses from '../../assets/Ramilya/licenses.png'
import map_card from '../../assets/Ramilya/map_d.png'
import map_marker from '../../assets/Ramilya/map_marker.png'




const Dublicates = () => {
    return (
        <div>
            <div className={s.container}>
                <h2 className={s.title_duplicates}><span>Главная</span> - Дубликаты госномеров</h2>
                <div className={s.dublicates_block}>
                    <div className={s.dublicates_top_right}>
                        <h2>Дубликаты госномеров</h2>
                        <h3>Изготовление дубликатов госномеров на ваш автомобиль  в соответствии
                            с ГОСТ РФ и соответствуют всем требованиям ГУОБДД МВД Росси</h3>
                    </div>
                    <div className={s.dublicates_top_left}>
                        <div className={s.dublicates_find}>
                            <img src={find} alt="find" />
                        </div>
                        <button>Проверить на сайте ГИБДД.РФ</button>
                        <h3>*Сведения об изготовителях государственных
                            регистрационных знаков по Ставропольскому краю</h3>
                    </div>
                </div>
                <section>
                    <div className={s.about_car}>

                        <div className={s.bg_fone}>
                            <div className={s.black_fone}></div>
                        </div>

                        <div className={s.left_about_car}>
                            <div className={s.block_about_car}>
                                <img src={time} alt="time" />
                                <h2 className={s.term}>Срок изготовления </h2>
                                <h3 className={s.five_min}>5 минут</h3>
                            </div>

                            <div className={s.block_about_car}>
                                <div className={s.verified}>
                                    <img src={verified} alt="verified" />
                                    <img className={s.verified_top} src={verified_top} alt="v" />
                                </div>
                                <h2 className={s.verified_text}>Дубликаты устойчивы к погодным условиям
                                    и механическим воздействиям (мойка, камни)</h2>
                            </div>

                            <div className={s.block_about_car}>
                                <div className={s.pistol}>
                                    <img src={pistol} alt="pistol" />
                                    <img className={s.pistol_line} src={pistol_line} alt="line" />
                                </div>
                                <h2 className={s.pistol_text}>Номерной знак не надо сверлить,
                                    он уже имеет специальные отверстия</h2>
                            </div>
                            <button className={s.about_car_btn}>Заказать</button>
                        </div>
                    </div>
                </section >

                <section>
                    <h1 className={s.price_title}>Сколько это будет стоить?</h1>

                    <div className={s.num_block}>

                        <div className={s.num_block}>
                            <div className={s.num_left_bg}>
                                <img className={s.num} src={num} alt="n" />
                            </div>
                            <div>
                                <h2 className={s.sht}>1 шт.</h2>
                                <h2 className={s.price}>1 000 ₽ </h2>
                            </div>
                        </div>

                        <div className={s.num_right}>
                            <div className={s.num_left_bg}>
                                <img className={s.num_top} src={num} alt="n" />
                                <img className={s.num_down} src={num} alt="n" />
                            </div>
                            <div>
                                <h2 className={s.sht}>2 шт.</h2>
                                <h2 className={s.price}>1 500 ₽  </h2>
                            </div>

                        </div>

                    </div>
                </section>

                <section>
                    <h1 className={s.production_title}><span>Оставить заявку </span>
                        на изготовление номера?</h1>
                    <h2 className={s.vvod_num}>Введите номер гос. регистрационного знака</h2>
                    <div className={s.num_vvod}>
                        <img src={num} alt="n" />
                    </div>
                    <div className={s.order_num}>
                        <input className={s.inp_order} type="text" placeholder='Имя*' />
                        <input className={s.inp_order} type="text" placeholder='Телефон*' />
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <button className={s.btn_order}>Заказать</button>
                    </div>
                </section>

                <section>
                    <h1 className={s.registration_title}>Для офомления понадобятся только:</h1>
                    <div className={s.registration}>

                        <div className={s.registration_block}>
                            <img className={s.passport_icon1} src={passport_icon1} alt="icon" />
                            <h2 className={s.registration_text1}>Свидетельство о регистрации
                                ( техпаспорт)</h2>
                        </div>

                        <div className={s.registration_block}>
                            <img className={s.passport_icon2} src={passport_icon2} alt="icon" />
                            <h2 className={s.registration_text2}>Паспорт или
                                водительское улостоверение клиента обратившегося к нам</h2>
                        </div>

                        <div>
                            <div className={s.registration_block}>
                                <img className={s.passport_icon3} src={passport_icon4} alt="icon" />
                                <h2 className={s.registration_text3}>Старые или испорченые гос.номера
                                    ( при наличии) нуждающиеся в замене</h2>
                            </div>
                            <h2 className={s.registration_info}>Старые пластины номеров, пришедшие в негодность, уничтожают и составляют соответствующий акт.</h2>
                        </div>

                    </div>
                </section>

                <section>
                    <div className={s.important}>
                        <h2 className={s.important_text}><span>Важно!</span>
                            Если получением дубликата номеров занимается представитель
                            владельца авто, необходимо оформить нотариально заверенную
                            доверенность, в которой полномочия доверенного лица
                            прописываются в полном объёме</h2>
                    </div>
                </section>

                <section>
                    <h1 className={s.licenses_title}>Наши лицензии</h1>
                    <div className={s.licenses_block}>

                        <div className={s.licenses_card}>
                            <img className={s.licenses} src={licenses} alt="licenses" />
                        </div>

                        <div className={s.licenses_middle_card}>
                            <img className={s.licenses_middle} src={licenses_middle} alt="m" />
                            <div className={s.licenses_down}>
                                <img src={licenses_down} alt="licenses_down" />
                            </div>

                        </div>

                        <div className={s.licenses_card}>
                            <img className={s.licenses} src={licenses} alt="licenses" />
                        </div>

                    </div>
                </section>

                <section>
                    <div className={s.map}>
                        <div className={s.map_left}>
                            <div className={s.map_marker_wp}>
                                <img className={s.map_marker} src={map_marker} alt="map_marker" />
                            </div>
                            <h2 className={s.address_title}>Адреса и телефоны выдачи дубликатов номеров</h2>
                            <div className={s.map_text1}>
                                <h2>г. Пятигорск ул.Бунимовича д.38
                                    График работы:
                                    пн-пт с 9:00 до 18:00</h2>
                            </div>
                            <h2 className={s.map_text2}>г. Минеральные Воды
                                пр.22 Партсъезда 137 кор.3
                                График работы:
                                пн-пт с 9:00 до 18:00</h2>

                            <h2 className={s.map_text3}>г. Кисловодск
                                ул. Азербайджанская д.28
                                График работы:
                                пн-пт с 9:00 до 18:00</h2>
                        </div>
                        <div>
                            <img src={map_card} alt="map" />
                        </div>
                    </div>
                </section>
            </div >

            <section className={s.connection}>
                <div className={s.container}>
                    <div className={s.connection_block}>
                        <div className={s.connection_left}>
                            <h2>Остались вопросы? <span>Свяжитесь с нами</span> </h2>
                            <h3>Если вы столкнулись с трудностями при
                                работе с Бери Рули, у Вас есть какие-то замечания или предложения — позвоните.
                                <span> Прием звонков с 09:00 до 18:00</span></h3>
                            <h4>+7 (962) 495 55 54</h4>
                        </div>
                        <div className={s.connection_right}>
                            <input type="text" placeholder=' Ваше имя' />
                            <input type="text" placeholder='Номер телефона' />
                            <input type="text" placeholder='Ваш вопрос' />
                            <div className={s.connection_down}>
                                <input type="checkbox" />
                                <h4>Согласие на обработку персональных данных</h4>
                                <button>Задать вопрос</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Dublicates;