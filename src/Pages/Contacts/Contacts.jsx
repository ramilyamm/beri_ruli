import React from 'react';
import s from './Contacts.module.css'
import Vector from '../../assets/Azat/contacts/Vector.png'
import tochka from '../../assets/Azat/contacts/tochka.png'
import w_tel from '../../assets/Azat/contacts/w_tel.png'
import w_tochka from '../../assets/Azat/contacts/w_tochka.png'
import insta from '../../assets/Azat/contacts/insta.png'
import vk from '../../assets/Azat/contacts/vk.png'
import telegram from '../../assets/Azat/contacts/telegram.png'




const Contacts = () => {
    return (
        <div>
            <div className={s.container}> <h4 className={s.in_arenda_avto}><span>Главная</span> - Контакты</h4></div>
            <section className={`${s.ramson} ${s.container}`}>
                <h2>Контакты</h2>
                <div className={s.in_ramson}>
                    <div><h3>Главный офис:</h3>
                        <p>г. Пятигорск, ул.Бунимовича д.38</p></div><span></span>
                    <div><h3>График работы:</h3>
                        <p>Пн-Сб с 9:00 до 18:00</p></div><span></span>
                    <div><h3>E-mail:
                    </h3><p>avto@beri-ruli.ru</p></div>
                </div>
                <div className={s.midle_ramson}>
                    <div><img src={Vector} alt="logo" /><h4>Отдел продаж
                        <span>8 800 555 55 55</span></h4></div>
                    <div><img src={Vector} alt="logo" /><h4>Отдел по работе с клиентами
                        <span>8 800 555 55 55</span></h4></div>
                </div>
                <div className={s.btn_up_card} >
                    <h3>Адреса и телефоны в городах</h3>
                    <div className={s.btn}>
                        <button>Ставрополь</button><button>Пятигорск</button><button>Краснодар</button>
                    </div>
                    <div className={s.btn_down}>
                        <div className={s.part_one}>
                            <img src={tochka} alt="logo" className={s.img_in} />
                            <img src={tochka} alt="logo" className={s.img_mid} />
                            <img src={tochka} alt="logo" className={s.img_btn} />
                        </div>
                        <div className={s.part_two}>
                            <div><img src={w_tel} alt="logo" /><h4>8 (962) 495 55 54</h4></div>
                            <div><img src={w_tochka} alt="logo" /><h4>Ул. Доваторцев 61</h4></div>
                            <div className={s.ikon}>
                                <div><img src={insta} alt="ikon" /></div>
                                <div><img src={vk} alt="ikon" /></div>
                                <div><img src={telegram} alt="ikon" /></div>
                                <div><img src={vk} alt="ikon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        </div>
    );
};

export default Contacts;