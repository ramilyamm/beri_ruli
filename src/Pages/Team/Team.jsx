import React from 'react';
import s from './Team.module.css'
import konstantin from '../../assets/Ramilya/konstantin.png'
import managers from '../../assets/Ramilya/managers.png'
import tel from '../../assets/Ramilya/team_tel.png'
import video_block from '../../assets/Ramilya/video_block.png'
import video_top from '../../assets/Ramilya/vide_top.png'
import video_icon from '../../assets/Ramilya/video_icon.png'
import icon_top from '../../assets/Ramilya/icon_top.png'

const Team = () => {
    return (
        <div>
            <div className={s.container}>
                <h2 className={s.title_team}>
                    <span>Главная</span> - <span> Вакансии</span> - Менеджер по продажам</h2>
                <section>
                    <h2 className={s.team_block}>Команда «Бери Рули»</h2>
                    <div className={s.team_btns_top}>
                        <button className={s.kmb_btn}>КМВ</button>
                        <button className={s.krasnodar_btn}>Краснодар</button>
                        <button className={s.krasnodar_btn}>Ставрополь</button>
                    </div>
                </section>

                <section>
                    <h2 className={s.title_employee}>Сотрудник месяца</h2>
                    <div className={s.konst_sect}>
                        <div className={s.konst_bg}>
                            <img className={s.konstantin} src={konstantin} alt="konstantin" />
                        </div>
                        <div className={s.about_konst}>
                            <h2>Константин</h2>
                            <h3>Менеджер по работе с клиентами</h3>
                            <div className={s.btn_konst}>
                                <h4>Помог выкупить автомобиль 14 владельцам в марте.</h4>
                            </div>
                        </div>

                        <div className={s.choise_infos}>
                            <h1>Примите участие в выборе лучшего менеджера года</h1>
                            <h2>Оставляйте свои голоса, и мы наградим самых
                                внимательных и ответственных менеджеров
                            </h2>
                            <div className={s.choise_info_block}>
                                <div className={s.choise_middle}>
                                    <input type="checkbox" />
                                    <input type="checkbox" />
                                    <input type="checkbox" />
                                </div>
                                <div className={s.choises_middle}>
                                    <h4>Игорь Иванов</h4>
                                    <h3>Антон Петров</h3>
                                    <h3>Анатолий Иванчук</h3>
                                </div>
                            </div>

                            <button className={s.btn_choise}>Проголосовать</button>
                            <h5>Оставить отзыв о «Бери Рули»</h5>
                        </div>

                    </div>
                </section>


                <section className={s.team_video_sect}>
                    <div className={s.video_block}>
                        <div>
                            <h2 className={s.team_video_title}>Видео о команде<span> «Бери Рули»</span></h2>
                            <h2 className={s.team_video_text}>Наши сотрудники рассказывают, как устроена
                                работа в «Бери Рули», чем занимается каждый отдел
                                и как им удается делать свою работу нужной и полезной</h2>
                        </div>
                        <div className={s.video_right}>
                            <div className={s.icons}>
                                <img className={s.video_top} src={video_top} alt="top" />
                            </div>
                            <div>
                                <img className={s.video_icon} src={video_icon} alt="icon" />
                                <img className={s.icon_top} src={icon_top} alt="icon" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.managers_sect}>
                    <h1 className={s.managers_title}>Менеджеры</h1>
                    <div className={s.managers_block}>


                        <div>
                            <img src={managers} alt="managers" />
                            <h2 className={s.managers_name}>Константин</h2>
                            <h2 className={s.managers_text}>Менеджер по работе с клиентами</h2>
                            <h2 className={s.managers_work}>Работает: с 2021 года</h2>
                            <p className={s.managers_info}> <span> Чем занимается:</span>
                                Помогает клиентам. Придумал программу
                                «Бери Рули Премиум». Чаще всего становится
                                сотрудником месяца.</p>
                            <p className={s.managers_info}><span> О работе в «Бери Рули»:</span>
                                Небольшая цитата сотрудника: почему ему нравится
                                его работа, почему работает именно в «Бери Рули»</p>
                        </div>

                        <div>
                            <img src={managers} alt="managers" />
                            <h2 className={s.managers_name}>Игорь</h2>
                            <h2 className={s.managers_text}>Менеджер по работе с клиентами</h2>
                            <h2 className={s.managers_work}>Работает: с 2021 года</h2>
                            <p className={s.managers_info}> <span> Чем занимается:</span>
                                Помогает клиентам. Придумал программу
                                «Бери Рули Премиум». Чаще всего становится
                                сотрудником месяца.</p>
                            <p className={s.managers_info}><span> О работе в «Бери Рули»:</span>
                                Небольшая цитата сотрудника: почему ему нравится
                                его работа, почему работает именно в «Бери Рули»</p>
                        </div>

                        <div>
                            <img src={managers} alt="managers" />
                            <h2 className={s.managers_name}>Сергей</h2>
                            <h2 className={s.managers_text}>Менеджер по работе с клиентами</h2>
                            <h2 className={s.managers_work}>Работает: с 2021 года</h2>
                            <p className={s.managers_info}> <span> Чем занимается:</span>
                                Помогает клиентам. Придумал программу
                                «Бери Рули Премиум». Чаще всего становится
                                сотрудником месяца.</p>
                            <p className={s.managers_info}><span> О работе в «Бери Рули»:</span>
                                Небольшая цитата сотрудника: почему ему нравится
                                его работа, почему работает именно в «Бери Рули»</p>
                        </div>
                    </div>
                </section>

                <section className={s.team_bottom}>
                    <div className={s.team_bottom_block}>
                        <div className={s.team_bottom_right}>
                            <h1>Служба заботы «Бери Рули»</h1>
                            <p>Обязательно звоните нам, если вы столкнулись с трудостями или
                                у вас есть пожелания по улучшению нашей работы.
                                Служба заботы о клиентах быстро реагирует и всегда найдет выход.</p>
                        </div>
                        <div>
                            <div className={s.team_bottom_left}>
                                <img className={s.tel} src={tel} alt="tel" />
                                <h2>8 800 456</h2>
                            </div>
                            <h3 className={s.team_bottom_down}>Без выходных с 9:00 до 18:00</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Team;