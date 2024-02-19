import React from 'react';
import s from './Catalog.module.css'
import car from '../../assets/Ramilya/right_car.png'
import car_bottom from '../../assets/Ramilya/right_bottom.png'
import lada1 from '../../assets/Ramilya/car1.png'
import lada2 from '../../assets/Ramilya/car2.png'
import lada3 from '../../assets/Ramilya/car3.png'
import passport_icon3 from '../../assets/Ramilya/passport_icon3.png'
import passport_icon2 from '../../assets/Ramilya/passport_icon2.png'
import passport_icon1 from '../../assets/Ramilya/passport_icon1.png'
import line from '../../assets/Ramilya/line.png'
import arrow_line from '../../assets/Ramilya/arrow_line.png'



const Catalog = () => {
    return (
        <div>
            <div className={s.container}>
                <h2 className={s.title_catalog}><span>Главная</span>- Каталог авто</h2>
                <div className={s.bg_fone}>
                    <div className={s.black_fone}>
                        <div className={s.top_text} >
                            <h2>Каталог автомобилей в наличии</h2>
                        </div>
                        <div className={s.right_block}>

                            <img className={s.car} src={car} alt="car" />
                            <img className={s.car_bottom} src={car_bottom} alt="car_bottom" />
                            <h2>Дарим страховку ОСАГО на один год</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={s.title}>Фильтр</h1>
                </div>
                <div className={s.filter}>
                    <select className={s.select_left}>
                        <option value="Вариант покупки">Вариант покупки</option>
                        <option value="Наличные ">Наличные</option>
                        <option value="Безналичный расчет">Безналичный расчет</option>
                    </select>
                    <select className={s.select_left}>
                        <option value="Состояние автомобиля">Состояние автомобиля</option>
                        <option value="Новое">Новое</option>
                        <option value="С пробегом 1 владелец">С пробегом 1 владелец</option>
                        <option value="С пробегом 2 владельца">С пробегом 2 владельца</option>
                    </select>
                    <h2 className={s.auto_and_year}>Год выпуска</h2>
                    <select className={s.select_right}>
                        <option value="От">От</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                    </select>
                    <select className={s.select_right}>
                        <option value="До">До</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                    </select>
                    <h2 className={s.mechanics}>Механика</h2>
                    <div>
                        <div className={s.switch}>
                            <input className={s.switch_inp} type="checkbox" />
                        </div>
                    </div>
                    <h2 className={s.auto_and_year}>Автомат</h2>
                    <button>Очистить фильтр</button>
                </div>


                <section>
                    <div className={s.triple_card}>
                        <div className={s.in_triple_card}>
                            <div className={s.in_tri_card}>
                                <img src={lada1} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                            <div className={s.in_tri_card}>
                                <img src={lada2} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                            <div className={s.in_tri_card}>
                                <img src={lada3} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.triple_card2}>
                        <div className={s.in_triple_card}>
                            <div className={s.in_tri_card}>
                                <img src={lada1} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                            <div className={s.in_tri_card}>
                                <img src={lada2} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                            <div className={s.in_tri_card}>
                                <img src={lada3} alt="logo" />
                                <div className={s.in_card_tri}>
                                    <h2>Без пробега</h2>
                                    <h3>Ваз (Lada) Гранта седан Comfort 16 КЛ</h3>
                                    <h4>Год выпуска 2021</h4>
                                    <div className={s.in_in_card}>
                                        <h5>Аренда с выкупом</h5> <p>1 300 руб/сутки</p>
                                        <h5>Рассрочка  </h5><p>1 200 руб/сутки</p>
                                        <h5>Наличные</h5><p>1 100 руб/сутки</p>
                                    </div>
                                </div>
                                <button className={s.in_down_btn}>Полные характеристики</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <h1 className={s.title_registration}>Для офомления понадобятся только:</h1>
                    <div className={s.registration}>
                        <div className={s.registration_block}>
                            <div className={s.decoration_btns}>
                                <img className={s.passport_icon} src={passport_icon1} alt="passport_icon1" />
                            </div>
                            <h2>Права</h2>
                        </div>
                        <div className={s.registration_block}>
                            <div className={s.decoration_btns}>
                                <img className={s.passport_icon2} src={passport_icon2} alt="passport_icon2" />
                            </div>
                            <h2>Паспорт</h2>
                        </div>
                        <div className={s.registration_block}>
                            <div className={s.decoration_btns}>
                                <img className={s.passport_icon3} src={passport_icon3} alt="passport_icon3" />
                            </div>
                            <h2>Первый взнос</h2>
                        </div>
                    </div>
                </section>

                <section className={s.request}>
                    <div className={s.request_left}>
                        <h2><span>Хотите автомобиль</span>, которого нет в каталоге или он уже продан?</h2>
                        <h3>Позвоните менеджеру — попробуем найти
                            эту или похожую модель автомобиля специально для вас. </h3>
                        <h4>Если не найдем сейчас — внесем вас
                            в базу и сообщим, как только что-то похожее появится в продаже.</h4>
                    </div>
                    <div className={s.request_rigth}>
                        <input type="text" placeholder=' Имя' />
                        <input type="text" placeholder='Номер телефона' />
                        <input type="text" placeholder='Марка автомобиля или другая информация' />
                        <div className={s.request_down}>
                            <input type="checkbox" />
                            <h4>Согласие на обработку персональных данных</h4>
                            <button>Задать вопрос</button>
                        </div>
                    </div>
                </section>

            </div>


            <section className={s.get_bg}>
                <div className={s.container}>
                    <div className={s.get_bg_in}>
                        <h2>Получить автомобиль легко<br />
                            <span>всего 4 шага и 30 минут времени</span></h2>
                        <h4>Срок выкупа — от 3 месяцев до 2 лет</h4>
                        <div className={s.middle_bg_in}>
                            <div className={s.card_middle_bg_in}>
                                <div className={s.card_card}><div>
                                    <h2>1.</h2>
                                    <h2>Шаг</h2>
                                </div>
                                </div>
                                <p><span>Выбирайте</span> автомобиль на сайте
                                    или сразу приезжайте в наш офис.
                                    Уточнить время можно по телефону</p>
                                <h3>8 800 456</h3>
                            </div>
                            <div className={s.card_middle_bg_in}>
                                <div className={s.card_card}><div>
                                    <h2>2.</h2>
                                    <h2>Шаг</h2>
                                </div>
                                </div>
                                <p> <span>Вместе</span> рассчитаем первый взнос и удобный ежемесячный платеж.
                                    Сумму платежа потом можно изменить.
                                    Первый взнос можно внести сразу или в рассрочку
                                    в течение 10 дней</p>
                            </div>
                            <div className={s.card_middle_bg_in}>
                                <div className={s.card_card}><div><h2>3.</h2> <h2>Шаг</h2></div>
                                </div>
                                <p><span>Заключаем</span> договор и создаем для вас личный кабинет на сайте, где будет отражаться вся история взносов</p>
                            </div>
                            <div className={s.card_middle_bg_in}>
                                <div className={s.card_card}><div><h2>4.</h2> <h2>Шаг</h2></div>
                                </div>
                                <p><span>Передаем</span> вам ключи от автомобиля.
                                    У вас есть 24 часа на тест-драйв — чтобы убедиться, что именно этот автомобиль вам подходит</p>
                            </div>
                        </div>
                        <button>Задать вопрос</button>
                    </div>
                </div>
            </section >

            <div className={s.container}>
                <section>
                    <h1 className={s.then_title}>А что потом?</h1>
                    <div className={s.then_block}>
                        <h3><span>Вносите</span> регулярный платеж каждый месяц. Платеж включает сумму аренды. Сами выбираете сумму для выплат. В среднем это от 18 000 тысяч в месяц</h3>
                        <div className={s.arrow_and_line}>
                            <img src={line} alt="line" />
                            <img className={s.arrow_line} src={arrow_line} alt="arrow_line" />
                        </div>
                        <h3>История платежей и напоминание о следующей оплате будут отражаться
                            в личном кабинете прямо на сайте.
                            <span>10 дней отсрочка платежа,</span> если в этом месяце что-то пошло не так Успеете поправить свои дела и внести платеж
                        </h3>
                        <div className={s.arrow_and_line}>
                            <img src={line} alt="line" />
                            <img className={s.arrow_line} src={arrow_line} alt="arrow_line" />
                        </div>
                        <h3><span>После внесение последнего платежа</span> переоформляем автомобиль на вас
                            и отдаем полный пакет документов</h3>
                    </div>
                    <div className={s.then_block}>
                        <h3><span>Если хотите выкупить автомобиль
                            раньше срока </span> — это можно сделать
                            в любой день. Мы не берем никаких комиссий. Просто вносите остаток
                            суммы, и мы передаем вам документы
                            на машину.</h3>
                        <div className={s.arrow_and_line}>
                            <img src={line} alt="line" />
                            <img className={s.arrow_line} src={arrow_line} alt="arrow_line" />
                        </div>
                        <h3><span>Персональный менеджер,</span>
                            который всегда поможет. Если попали в ДТП, нужна отсрочка платежа
                            или есть вопрос</h3>

                        <div className={s.arrow_and_line}>
                            <img src={line} alt="line" />
                            <img className={s.arrow_line} src={arrow_line} alt="arrow_line" />
                        </div>

                        <h3><span>Скидка 20%</span>
                            на выкуп всех последующих автомобилей</h3>
                    </div>
                </section>
            </div>

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
                            <input type="text" placeholder='Ваше имя' />
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

export default Catalog;
