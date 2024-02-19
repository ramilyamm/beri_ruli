import React from 'react';
import s from './ForInvestors.module.css'
import krugg from '../../assets/Azat/krugg.png'
import file_document from '../../assets/Azat/forivestor/file_document_icon_143599 1.png'
import kubok from '../../assets/Azat/about_company/kul.png'
import tnof from '../../assets/Azat/about_company/2015.png'



const ForInvestors = () => {
    return (
        <div>
            <div className={s.container}> <h4 className={s.in_arenda_avto}><span>Главная</span> - Для инвесторов</h4></div>
            <section className={`${s.for_in} ${s.container}`}>
                <h2>Для инвесторов</h2>
                <h3>Коммерческие облегации на предъявителя “КО-01”</h3>
                <h4>Общие сведенья</h4>
                <div className={s.cards}>
                    <div><img src={krugg} alt="logo" /><h4>Объем продаж 26 миллионов рублей</h4></div>
                    <div><img src={krugg} alt="logo" /><h4>Дата погашения 07.03.2025</h4></div>
                    <div><img src={krugg} alt="logo" /><h4>Срок обращения 4 года (48 месяцев)</h4></div>
                    <div><img src={krugg} alt="logo" /><h4>ISIN код RU000A102U11</h4></div>
                    <div><img src={krugg} alt="logo" /><h4> Номинал облигации 1000 рублей</h4></div>
                    <div><img src={krugg} alt="logo" /><h4>Ставка 17 %</h4></div>
                    <div><img src={krugg} alt="logo" /><h4>Длительность купона 91 дней</h4></div>
                    <div></div>
                </div>
                <div className={s.unique}>
                    <div>
                        <h3>Учредительные документы</h3>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Устав от 26.11.2013</h4></div>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Изменения в Устав от 12.03.2018</h4></div>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Изменения в Устав от 10.10.2019</h4></div>
                    </div>
                    <div>
                        <h3>Эмиссионные документы</h3>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Устав от 26.11.2013</h4></div>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Изменения в Устав от 12.03.2018</h4></div>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Изменения в Устав от 10.10.2019</h4></div>
                    </div>
                    <div>
                        <h3>Сообщения</h3>
                        <div className={s.img_slog}><img src={file_document} alt="logo" /><h4>Устав от 26.11.2013</h4></div>
                    </div>
                </div>
            </section>
            <section className={`${s.beri_ruli} ${s.container}`}>
                <h2>Бери Рули — <span>Лидеры на Юге России</span></h2>
                <div className={s.lider}>
                    <div className={s.blue_cubok}>
                        <img src={kubok} alt="logo" className={s.img_in_bg} />
                        <img src={tnof} alt="logo" className={s.img_in_bg_in} />
                        <p>Наша компания завоевало звание
                            лучшего авто бренда  2015 года
                            в Ставрапольском крае</p>
                    </div>
                    <div className={s.seo}>
                        <h4>SEO-текст</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
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

export default ForInvestors;