import React from 'react';
import s from './PersonalAccaunt.module.css'

const PersonalAccaunt = () => {
    return (
        <div>
              <div className={s.container}>
               <div className={s.color_block}>
                 <div className={s.yellow_blocks}>
                    <p>Спецпредложение</p>
                    {/* <img src="" alt="" /> */}
                   
                 </div>
                 <div className={s.color_text}>
                    <h1>Приведи друга и получите вместе получите скидку!</h1>
                   <p>Если по ващей рекомендации ващ друг/знакомый заключает договор в компании “Бери Рули” Он получает 5 000 рублей от оценочной стоимости своего автомобиля! После того как он внесет второй платеж, 5 000 тысяч рублей отнимется о стоимости автомобиля!</p>
                 </div>
                 <div>
                    <p>Свернуть</p>
                 </div>
               </div>
              </div>

        </div>
    );
};

export default PersonalAccaunt;