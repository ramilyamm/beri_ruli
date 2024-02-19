import React from 'react';
import s from './ThirdPart.module.css'
import krugg from '../../../assets/Azat/krugg.png'
import mugick from '../../../assets/Azat/beri_ruli.png'
import mob_phone from '../../../assets/Azat/mob_phone.png'
import colya from '../../../assets/Azat/colya.png'
import igor from '../../../assets/Azat/igor.png'
import sergei from '../../../assets/Azat/sergei.png'




const ThirdPart = () => {
    return (
        <div>
            <section className={`${s.successful}  ${s.container}`}>
                <div className={s.in_successful}>
                    <img src={krugg} alt="logo" />
                    <div>
                        <h2>Выбор автомобиля и первый взнос</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
                            <br /><br />
                            commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                    </div>
                </div>
                <div className={s.in_successful}>
                    <img src={krugg} alt="logo" />
                    <div>
                        <h2>Расчет ежемесячного платежа</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et</p>
                    </div>
                </div>
            </section>
            <section className={`${s.calculate}  ${s.container}`}>
                <div className={s.in_calculate}>
                    <h2>Как рассчитывается платеж?</h2>
                    <h3>Рассказывает наш менеджер Игорь.
                        <br />Если у вас остались вопросы после видео, <span>звоните
                            или приезжайте в наш офис</span></h3>
                    <button>Перезвоните мне</button>
                </div>
                <img src={mugick} alt="photo" />
            </section>
            <section className={`${s.payments}  ${s.container}`}>
                <div><img src={krugg} alt="logo" /><h2>Как проходят регулярные выплаты?</h2></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
                    commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
            </section>
            <section className={s.mob_phone}>
                <img src={mob_phone} alt="photo" />
                <div><div className={s.in_div}><img src={krugg} alt="logo" /><h2>Как проходят регулярные выплаты?</h2></div>
                    <p>Мы постоянно улучшаем наш сервис, добавляем новые удобные услуги.
                        В <span>2017 году мы сделали большой шаг — разработали собственную систему, где каждый клиент может просмотреть историю платежей.</span> Вход в личный кабинет доступен в любое время и из любого места — достаточно иметь под рукой телефон и интернет.
                        <br /><br />
                        В сервисе вся информация обновляется автоматически.

                        В личном кабинете есть функция напоминания о платеже, которая поможет не забыть о платеже.</p></div>
            </section >
            <section className={`${s.payments_down}  ${s.container}`}>
                <div className={s.pay_down_in}><img src={krugg} alt="logo" /><div><h2>Бонусная программа и скидки «Бери Рули Премиум»</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
                        <br /><br />
                        commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p></div>
                </div>
                <div className={s.pay_down_down}><img src={krugg} alt="logo" /><div><h2>Выкуп и переоформление автомобиля</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
                    </p></div>
                </div>
            </section>
            <section className={`${s.team}  ${s.container}`}>
                <h2>Наша команда</h2>
                <p>У нас работает целая команда опытных менеджеров, к которым вы можете обратиться по любому вопросу
                    — от выбора машины до совета по работе на автомобиле. Мы долго собирали нашу команду и очень ей гордимся.
                    Многие менеджеры сами выкупали машину в «Бери Рули», поэтому знают все нюансы выкупа и оформления автомобиля.
                </p>
                <h3>Ждем ваших звоноков с 9:00 до 20:00 в любой день.</h3>
                <div className={s.cards}>
                    <div className={s.card}>
                        <img src={colya} alt="avatar" />
                        <h2>Константин</h2>
                        <h3>Менеджер по работе с клиентами</h3>
                    </div>
                    <div className={s.card}>
                        <img src={igor} alt="avatar" />
                        <h2>Игорь</h2>
                        <h3>Менеджер по работе с клиентами</h3>
                    </div>
                    <div className={s.card}>
                        <img src={sergei} alt="avatar" />
                        <h2>Сергей</h2>
                        <h3>Менеджер по работе с клиентами</h3>
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
        </div >
    );
};

export default ThirdPart;