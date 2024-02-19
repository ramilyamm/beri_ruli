import React from 'react';
import s from './ArendaAvto.module.css'
import top_clock from '../../assets/Azat/1.1.png'
import top_list from '../../assets/Azat/1.2.png'
import top_dol from '../../assets/Azat/1.3.png'
import top_car from '../../assets/Azat/1.4.png'
import top_mani from '../../assets/Azat/2.1.png'
import top_prosent from '../../assets/Azat/2.2.png'
import top_pen from '../../assets/Azat/2.3.png'
import top_avto from '../../assets/Azat/2.4.png'
import beri_ruli from '../../assets/Azat/beri_ruli.png'
import krugg from '../../assets/Azat/krugg.png'
import lada1 from '../../assets/Azat/lada1.png'
import lada2 from '../../assets/Azat/lada2.png'
import lada3 from '../../assets/Azat/lada3.png'
import Arrow_1 from '../../assets/Azat/Arrow (1).png'
import Line_f from '../../assets/Azat/Line 4.png'
import Line_for from '../../assets/Azat/Line_for.png'
import Arrow_for from '../../assets/Azat/Arrow_for.png'
import mugick from '../../assets/Azat/mugick.png'
import SecundPart from './SecundPart/SecundPart';
import ThirdPart from './ThirdPart/ThirdPart';

const ArendaAvto = () => {
    return (
        <div>
            <div className={s.container}> <h4 className={s.in_arenda_avto}><span>Главная</span> -Аренда автомобиля с выкупом</h4></div>
            <section className={`${s.arenda_avto} ${s.container}`}>
                <h4>Аренда автомобиля с выкупом  в СКФО от 530 ₽/сутки</h4>
                <div className={s.p_in_avto}><p>Автомобиль в собственности меньше, чем за год
                    11 месяцев средний срок выкупа в «Бери Рули» </p></div>

            </section >
            <section className={`${s.ramson} ${s.container}`}>
                <h4>Выкупать автомобиль с нами
                    <span>удобно, быстро и выгодно</span></h4>
                <p>В отличии от кредита в банке аренда автомобиля с выкупом в компании «Бери Рули»
                    не требует справки с места работы, занимает гораздо меньше вашего времени и дается на выгодных и понятных условиях</p>
            </section>
            <section className={`${s.cards} ${s.container}`}>
                <div className={s.card}>
                    <div>  <img src={top_clock} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>30 минут, и вы на машине</h4>
                        <p>Столько времени займет
                            вся процедура аренды
                        </p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_list} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>Без справок
                            и документов</h4>
                        <p>Нужны только паспорт
                            и водительские права</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_dol} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>Первоначальный
                            взнос ниже, чем
                            требуют банки</h4>
                        <p>Возможна рассрочка на первый взнос</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_car} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>На авто можно сразу работать</h4>
                        <p>Работайте на автомобиле
                            и покрывайте ежемесячный взнос</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_mani} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>Возвращаем деньги</h4>
                        <p>За не выкупленный автомобиль</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_prosent} alt="logo" /></div>

                    <div className={s.in_card}>
                        <h4>Бесплатно даем 24 часа</h4>
                        <p>На тестирование автомобиля</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_pen} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>Все официально
                            и прозрачно</h4>
                        <p>Заключаем договор,
                            где все четко прописано</p>
                    </div>
                </div>
                <div className={s.card}>
                    <div>  <img src={top_avto} alt="logo" />
                    </div>
                    <div className={s.in_card}>
                        <h4>Выкуп в любой момент</h4>
                        <p>Заключаем договор,
                            где все четко прописано</p>
                    </div>
                </div>
            </section>
            <section className={s.earnings}>
                <div className={`${s.in_earnings}  ${s.container}`}>
                    <h2><span>Сразу зарабатывайте на новом автомобиле </span>и платите ежемесячные взносы с зарплаты</h2>
                    <h4>Взяв автомобиль в аренду с выкупом и зарабатывая на нем, через 10-12 месяцев вы сможете выкупить его, и он перейдет в вашу собственность! Некоторые наши клиенты выкупают автомобиль быстрее, чем за 5 месяцев*</h4>
                    <h3>Где можно работать на собственном автомобиле:</h3>
                    <p>*Данные о доходах взяты у наших клиентов, которые сейчас работают и выкупают автомобиль</p>
                </div>
                <div className={`${s.down_earnings}  ${s.container}`}>
                    <div className={s.in_down_e}>
                        <h4>Такси</h4>
                        <p>от 27 000 ₽/месяц*</p>
                    </div>
                    <div className={s.in_down_e}>
                        <h4>Охрана</h4>
                        <p>от 23 000 ₽/месяц*</p>
                    </div>
                    <div className={s.in_down_e}>
                        <h4>Курьер</h4>
                        <p>от 20 000 ₽/месяц*</p>
                    </div>
                    <div className={s.in_down_e}>
                        <h4>Торговый
                            представитель</h4>
                        <p>от 40 000 ₽/месяц*</p>
                    </div>
                    <div className={s.in_down_e}>
                        <h4>Предприниматель</h4>
                        <p>от 50 000 ₽/месяц*</p>
                    </div>
                </div>
            </section>
            <section className={`${s.catalog}  ${s.container}`}>
                <div className={s.in_catalog}>
                    <h2>Каталог автомобилей в аренду
                        с выкупом в Ставрополе</h2>
                    <h3>Кому подходит аренда в “Бери Рули”</h3>
                    <p>Рассказывает наш менеджер Илья</p>
                </div>
                <img src={beri_ruli} alt="photo" />
            </section>
            <section className={`${s.complect}  ${s.container}`}>
                <div className={s.in_comlect}>
                    <img src={krugg} alt="logo" />
                    <h3><span>Полная комплектация</span> сигнализация, сезонная резина, стеклоподъёмниками и автомагнитолой</h3>
                </div>
                <div className={s.in_comlect}>
                    <img src={krugg} alt="logo" />
                    <h3><span>Только реальный пробег.</span> Средний пробег — 60 000 км</h3>
                </div>
                <div className={s.in_comlect}>
                    <img src={krugg} alt="logo" />
                    <h3><span>Отличное техническое состояние</span> каждого автомобиля подтверждено службой качества «Бери Рули»</h3>
                </div>
                <div className={s.in_comlect}>
                    <img src={krugg} alt="logo" />
                    <h3><span>Только один владелец.</span> Редко — двое.

                    </h3>
                </div>
                <div className={s.in_comlect}>
                    <img src={krugg} alt="logo" />
                    <h3>Модели <span>не старше 2–7 лет</span> </h3>
                </div>
                <div className={s.in_comlect}></div>
            </section >
            <section className={`${s.triple_card}  ${s.container}`}>
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
                <div className={s.in_btn}><button>Смотреть весь каталог</button></div>
            </section>
            <section className={`${s.request}  ${s.container}`}>
                <div className={s.request_left}>
                    <h2><span>Хотите автомобиль,</span> которого нет в каталоге или он уже продан?</h2>
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
            <section className={s.get_bg}>
                <div className={`${s.get_bg_in}  ${s.container}`}>
                    <h2>Получить автомобиль легко<br />
                        <span>всего 4 шага и 30 минут времени</span></h2>
                    <h4>Срок выкупа — от 3 месяцев до 2 лет</h4>
                    <div className={s.middle_bg_in}>
                        <div className={s.card_middle_bg_in}>
                            <div className={s.card_card}><div><h2>1.</h2> <h2>Шаг</h2></div>
                                <img className={s.img_in_h2} src={Line_f} alt="logo" /><img className={s.in_img_h2} src={Arrow_1} alt="logo" /></div>
                            <p><span>Выбирайте</span> автомобиль на сайте
                                или сразу приезжайте в наш офис.
                                Уточнить время можно по телефону</p>
                            <h3>8 800 456</h3>
                        </div>
                        <div className={s.card_middle_bg_in}>
                            <div className={s.card_card}><div><h2>2.</h2> <h2>Шаг</h2></div>
                                <img className={s.img_in_h2} src={Line_f} alt="logo" /><img className={s.in_img_h2} src={Arrow_1} alt="logo" /></div>
                            <p> <span>Вместе</span> рассчитаем первый взнос и удобный ежемесячный платеж.
                                Сумму платежа потом можно изменить.
                                Первый взнос можно внести сразу или в рассрочку
                                в течение 10 дней</p>
                        </div>
                        <div className={s.card_middle_bg_in}>
                            <div className={s.card_card}><div><h2>3.</h2> <h2>Шаг</h2></div>
                                <img className={s.img_in_h2} src={Line_f} alt="logo" /><img className={s.in_img_h2} src={Arrow_1} alt="logo" /></div>
                            <p><span>Заключаем</span> договор и создаем для вас личный кабинет на сайте, где будет отражаться вся история взносов</p>
                        </div>
                        <div className={s.card_middle_bg_in}>
                            <div className={s.card_card}><div><h2>4.</h2> <h2>Шаг</h2></div>
                                <img className={s.img_in_h2} src={Line_f} alt="logo" /><img className={s.in_img_h2} src={Arrow_1} alt="logo" /></div>
                            <p><span>Передаем</span> вам ключи от автомобиля.
                                У вас есть 24 часа на тест-драйв — чтобы убедиться, что именно этот автомобиль вам подходит</p>
                        </div>
                    </div>
                    <button>Задать вопрос</button>
                </div>
            </section>
            <section className={`${s.what_in}  ${s.container}`}>
                <h2>А что потом?</h2>
                <div className={s.card_in_what}>
                    <div><p><span>Вносите</span> регулярный платеж каждый месяц. Платеж включает сумму аренды. Сами выбираете сумму для выплат. В среднем это от 18 000 тысяч в месяц</p></div>
                    <div className={s.img_for_card}><img src={Line_for} alt="logo" /><img src={Arrow_for} alt="logo" /></div>
                    <div><p>История платежей и напоминание о следующей оплате будут отражаться
                        в личном кабинете прямо на сайте.
                        <span>10 дней отсрочка платежа,</span> если в этом месяце что-то пошло не так Успеете поправить свои дела и внести платеж

                    </p></div>
                    <div className={s.img_for_card}><img src={Line_for} alt="logo" /><img src={Arrow_for} alt="logo" /></div>
                    <div><p><span>После внесение последнего платежа</span> переоформляем автомобиль на вас
                        и отдаем полный пакет документов</p></div>
                    <div><p><span>Если хотите выкупить автомобиль
                        раньше срока </span> — это можно сделать
                        в любой день. Мы не берем никаких комиссий. Просто вносите остаток
                        суммы, и мы передаем вам документы
                        на машину.</p></div>
                    <div className={s.img_for_card}><img src={Line_for} alt="logo" /><img src={Arrow_for} alt="logo" /></div>
                    <div><p><span>Персональный менеджер,</span>
                        который всегда поможет. Если попали в ДТП, нужна отсрочка платежа
                        или есть вопрос</p></div>
                    <div className={s.img_for_card}><img src={Line_for} alt="logo" /><img src={Arrow_for} alt="logo" /></div>
                    <div><p><span>Скидка 20%</span>
                        на выкуп всех последующих автомобилей</p></div>
                </div>
            </section>
            <section className={`${s.successful}  ${s.container}`}>
                <h2> <span>852 успешные истории</span>
                    выкупа автомобиля</h2>
                <div className={s.successful_his}>
                    <img src={mugick} alt="photo" />
                    <div>
                        <h3>Алексей</h3>
                        <h4>Город: Пятигорск<br />
                            Автомобиль: Ваз (Lada) Гранта седан Comfort</h4>
                        <h5>Время выруска:<span> 5 месяцев</span><br />
                            Менеджер: Алина</h5>
                        <h6>История клиента: Почему взяли автомобиль? Почему <br /> выбрали Бери Рули?
                        </h6>
                        <p>Отзыв: Знаю о бери рули уже не первый год, но никогда раньше лично не обращался . Захотел подработать, нужна была машина. Обратился, взял без проблем. Именно ту, которую хотел, еще и на газу Знаю о бери рули уже не первый год,
                        </p>
                    </div>
                </div>
            </section>
            <SecundPart />
            <ThirdPart />
        </div >
    );
};

export default ArendaAvto;