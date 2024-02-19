import React from 'react';
import s from './EnterPersAcc.module.css'

const EnterPersAcc = () => {
  return (
    <div className={s.enter_pers}>
      <div className={s.container}>
        <div className={s.enter}>
          <h1>Вход в личный кабинет </h1>
          <p>Доступ в личный кабинет с историей платежей и прогрессом выплат</p>
          <form>
            <input type="text" placeholder='Введите номер договора' />
            <input type="text" placeholder='Введите клиентский код' />
          </form>
          <button>Войти</button>
        </div>
      </div>
      {/* <div className={s.enter_blocks}>
        <div className={s.container}> */}
      {/* <div className={s.enter_info_block}> */}
      {/* <h2>Остались вопросы?</h2>
            <h3> Свяжитесь с нами</h3>
            <p>Если вы столкнулись с трудностями при работе с Бери Рули, у Вас есть какие-то замечания или предложения — позвоните. Прием звонков с 09:00 до 18:00</p>
            <a href="+7 (962) 495 55 54">+7 (962) 495 55 54</a>
          </div>
        
          <form >
            <input type="text" placeholder='Ваше имя' />
            <input type="text" placeholder='Номер телефона' />
            <input type="text" placeholder='Ваш вопрос' />
          </form>
       
          <div className={s.enter_question} >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                <path d="M2 7.87345L8.12661 14L20.6266 1.5" stroke="#0088CF" stroke-width="3" />
              </svg>
            </div>
            <div className={s.question}>
              <p>Согласие на обработку персональных данных</p>
              <button>Задать вопрос</button>
            </div> */}
      {/* </div> */}

      {/* </div> */}
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
      // </div>
    // </div >










  );
};

export default EnterPersAcc;