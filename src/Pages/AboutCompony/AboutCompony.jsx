import React from 'react';
import s from './AboutCompony.module.css'
import { NavLink } from 'react-router-dom';
import kubok from '../../assets/Azat/about_company/kul.png'
import tnof from '../../assets/Azat/about_company/2015.png'
import Rectangle1 from '../../assets/Azat/about_company/Rectangle1.png'
import Rectangle2 from '../../assets/Azat/about_company/Rectangle2.png'
import Rectangle3 from '../../assets/Azat/about_company/Rectangle3.png'
import Group1 from '../../assets/Azat/about_company/Group1.png'
import Group312 from '../../assets/Azat/about_company/Group 312.png'
import Vector3 from '../../assets/Azat/about_company/Vector3.4.png'
import Group5 from '../../assets/Azat/about_company/Group5.png'
import Vector6 from '../../assets/Azat/about_company/Vector6.png'
import Vector7 from '../../assets/Azat/about_company/Vector7.png'
import Group8 from '../../assets/Azat/about_company/Group8.png'
import credit from '../../assets/Azat/about_company/credit-card9.png'
import Group10 from '../../assets/Azat/about_company/Group10.png'





const AboutCompony = () => {
    return (
        <div>
            <div className={s.container}> <h4 className={s.in_arenda_avto}><span>Главная</span> - О компании</h4></div>
            <section className={`${s.ramson} ${s.container}`}>
                <div className={s.mini_menu}>
                    <div className={s.mini_menu_item}>
                        <NavLink className={({ isActive }) =>
                            isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                        }
                            to={'/team'}>Команда </NavLink>
                    </div>
                    <div className={s.mini_menu_item}>
                        <NavLink className={({ isActive }) =>
                            isActive ? `${s.avtive} ${s.menu_item}` : `${s.menu_item}`
                        }
                            to={'/reviews'}>Новости</NavLink>
                    </div>
                    <div className={s.mini_menu_item}>
                        <NavLink className={({ isActive }) =>
                            isActive ? `${s.menu_item} ${s.avtive}` : `${s.menu_item}`
                        }
                            to={'/vacancy'}>Вакансии</NavLink>
                    </div></div>
                <div className={s.about_company}>
                    <div className={s.in_about_company}>
                        <div className={s.o_comp}><h2>О компании</h2>
                            <p>«Бери Рули» — это надёжная компания с хорошей репутацией, потому что всегда выполняем свои обязательства, работаем честно и открыто. Нашу компанию хорошо знают на КМВ, нас рекомендуют друзьям и коллегам, наши клиенты возвращаются
                                к нам снова и снова. Для нас очень важно сохранять
                                с клиентами доверительные отношения.</p>
                        </div>
                        <div className={s.blue_cubok}>
                            <img src={kubok} alt="logo" className={s.img_in_bg} />
                            <img src={tnof} alt="logo" className={s.img_in_bg_in} />
                            <p>Наша компания завоевало звание
                                лучшего авто бренда  2015 года
                                в Ставрапольском крае</p>
                        </div>
                    </div>
                    <div className={s.numbers}>
                        <div>
                            <h2>1268</h2>
                            <h3>Довольных клиентов</h3>
                        </div>
                        <div>
                            <h2>852 </h2>
                            <h3>Выкукпленных автомобиля</h3>
                        </div>
                        <div>
                            <h2>53</h2>
                            <h3>Покупают сейчас</h3>
                        </div>
                    </div>
                    <div className={s.more_details}>
                        <h2>Мы ценим своих клиентов и всегда предлагаем им оптимальные условия сотрудничества</h2>
                        <p>Компания «Бери Рули» работает на рынке аренды и проката автомобилей с 2009 года.
                            Сегодня мы предлагаем лучшие условия по выгодной цене и работаем так, что клиенты остаются довольны сотрудничеством с нами и возвращаются к нам снова.
                        </p>
                        <p> За эти годы мы прошли большой путь — от молодой компании до признанного лидера в регионе КМВ. Мы увеличили автопарк с 10 автомобилей до 50 и наладили партнёрские отношения со страховыми компаниями, юридическими фирмами и магазинами автозапчастей, поэтому наши автомобили всегда в отличном состоянии, а все процедуры занимают минимум времени.</p>
                        <h6>
                            Мы много работали над качеством услуг, чтобы нашим клиентам было удобно и выгодно иметь дело с нами.
                            Мы гарантируем высокое качество услуг, при этом цены остаются стабильными, несмотря на кризис и другие неблагоприятные события в стране</h6>
                    </div>
                    <div className={s.third_img}>
                        <img src={Rectangle1} alt="logo" /><img src={Rectangle2} alt="logo" /><img src={Rectangle3} alt="logo" />
                    </div>
                    <div className={s.ten_advantages}>
                        <h2><span>10 преимуществ </span>сотруднечиства с нами</h2>
                        <div className={s.advantages}>
                            <div>
                                <div className={s.img_in_ten}><img src={Group1} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Первоначальный взнос ниже, чем требуют банки</h3>
                                    <p>Также вы можете вносить сумму больше фиксированного ежемесячного платежа, чтобы быстрее выкупить автомобиль;</p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Group312} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>30
                                        Стоимость автомобиля можно выплачивать в течение 2 лет (минимальный срок — 1 месяц)</h3>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Vector3} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Вы сразу после оформления договора получаете автомобиль в своё распоряжение</h3>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Vector3} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>У нас в автопарке 50 автомобилей не старше 5 лет.</h3>
                                    <p>Мы гарантируем, что у нас всегда есть автомобили в наличии, и вы сможете выбрать тот автомобиль, который больше понравится;</p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Group5} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Вы застрахованы от покупки кота в мешке.</h3>
                                    <p>Аренда с выкупом позволяет вам попробовать автомобиль в работе. Если по каким-то характеристикам автомобиль вас не устроит, вы можете отказаться от него и попробовать другую модель. Более того, мы даём возможность протестировать автомобиль в течение суток. Если вас что-то не устроит, то мы устраним неисправность, поменяем автомобиль и вернём деньги. По факту оплаты мы выдаем квитанцию;</p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Vector6} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Для оформления договора от вас потребуется минимальный набор документов: </h3>
                                    <p>Паспорт и водительское удостоверение;</p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Vector7} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Мы уже поставили автомобили на учёт, провели техосмотр, застраховали все автомобили (ОСАГО)</h3>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Group8} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Автомобили готовы к работе.</h3>
                                    <p>Они проходят регулярный технический осмотр, имеют страховку ОСАГО, а также укомплектованы сигнализацией, стеклоподъёмниками и автомагнитолой;
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={credit} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Для вашего удобства мы предлагаем несколько вариантов оплаты</h3>
                                    <p>(наличными, переводом на банковский счёт, с помощью кредитной карты)
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={s.img_in_ten}><img src={Group10} alt="logo" /></div>
                                <div className={s.advantages_in}>
                                    <h3>Мы заключаем официальный договор</h3>
                                    <p>Который чётко прописывает обязанности сторон и надёжно защищает ваши права.
                                    </p>
                                </div>
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
                                <br /><br /><span> Прием звонков с 09:00 до 18:00</span></h3>
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

export default AboutCompony;