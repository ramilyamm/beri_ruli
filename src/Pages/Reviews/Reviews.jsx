import React from 'react';
import s from './Reviews.module.css'
import { Pagination } from '@mui/material';
import Group from '../../assets/Azat/forivestor/Group 90 (1).png'
import Vector from '../../assets/Azat/forivestor/Vector.png'
import Stars from '../../assets/Azat/forivestor/Stars.png'



const Reviews = () => {
    return (
        <div>
            <div className={s.container}> <h4 className={s.in_arenda_avto}><span>Главная</span> - Отзывы</h4></div>
            <section className={`${s.ramson} ${s.container}`}>
                <h2>Стали счастливыми владельцами авто</h2>
                <h3>Стали счастливыми владельцами авто</h3>
                <div className={s.in_cards}>
                    <div className={s.cards}>
                        <div className={s.card}><img src={Group} alt="logo" />
                            <p>Знаю о бери рули уже не первый год, но никогда раньше лично не обращался . Захотел подработать, нужна была машина. Обратился, взял без проблем.
                                Именно ту, которую хотел, еще и на газу Знаю о бери рули уже не первый год,
                                но никогда раньше лично не обращался .</p></div>
                        <div className={s.card}><img src={Group} alt="logo" />
                            <p>Знаю о бери рули уже не первый год, но никогда раньше лично не обращался . Захотел подработать, нужна была машина. Обратился, взял без проблем.
                                Именно ту, которую хотел, еще и на газу Знаю о бери рули уже не первый год,
                                но никогда раньше лично не обращался .</p></div>
                        <div className={s.card}><img src={Group} alt="logo" />
                            <p>Знаю о бери рули уже не первый год, но никогда раньше лично не обращался . Захотел подработать, нужна была машина. Обратился, взял без проблем.
                                Именно ту, которую хотел, еще и на газу Знаю о бери рули уже не первый год,
                                но никогда раньше лично не обращался .</p></div>
                        <div className={s.card}><img src={Group} alt="logo" />
                            <p>Знаю о бери рули уже не первый год, но никогда раньше лично не обращался . Захотел подработать, нужна была машина. Обратился, взял без проблем.
                                Именно ту, которую хотел, еще и на газу Знаю о бери рули уже не первый год,
                                но никогда раньше лично не обращался .</p></div>
                        <div className={s.pagin}><Pagination count={10} variant="outlined" shape="rounded" color="primary" /></div>
                    </div>
                    <div className={s.blue_card}>
                        <img src={Vector} alt="log" />
                        <p>Для улучшения качества обслуживания просим оставить отзыв о нашей работе.</p>
                        <button>Оставить отзыв</button>
                    </div>
                </div>
            </section>
            <section className={s.connection}>
                <div className={s.container}>
                    <div className={s.connection_block}>
                        <div className={s.connection_right}>
                            <h3>Оставьте свой отзыв</h3>
                            <h6><img src={Stars} alt="logo" />Оцените</h6>
                            <input type="text" placeholder=' Ваше имя*' />
                            <input type="text" placeholder='Номер телефона*' />
                            <input type="text" placeholder='Ваш отзыв*' />
                            <div className={s.connection_down}>
                                <input type="checkbox" />
                                <h4>Согласие на обработку персональных данных</h4>
                                <button>Отправить</button>
                            </div>
                        </div>
                        <div className={s.connection_left}>
                            <h3>Если вы столкнулись с трудностями при
                                работе с Бери Рули, у Вас есть какие-то замечания или предложения — позвоните.
                                <span> Прием звонков с 09:00 до 18:00</span></h3>
                            <h4>+7 (962) 495 55 54</h4>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Reviews;