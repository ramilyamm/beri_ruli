import React from 'react';
import s from './Stock.module.css'
import car from '../Stock/image/car.png'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';


const Stock = () => {
   return (
      <div className={s.stock}>
         <div className={s.container}>
            <div className={s.nav_block}>
               <h1>
                  Новости Бери Рули
               </h1>
               <nav className={s.nav_stock}>
                  <ul>
                     <li>
                        <a href="">Новости</a>
                     </li>
                     <li>
                        <a href="">Акции</a>
                     </li>
                     <li>
                        <a href="">Блог</a>
                     </li>
                     <li>
                        <a href="">Спецпредложения</a>
                     </li>
                  </ul>

                  <a href="">Смотреть все</a>
               </nav>
            </div>

            <div className={s.cars_block}>
               <div className={s.cards_img}>
                  <img className={s.img} src={car} alt="car" />
               </div>
               <div className={s.cards_text}>
                  <h2>Новая битопливная Lada Vesta  в “Бери Рули”</h2>
                  <p>06.03.2022</p>
                  <Link to={'/detail_stock'}>
                     <button className={s.btn_detail_cars}>Подробнее</button>
                  </Link>
               </div>

            </div>
            <div className={s.cars_block}>
               <div className={s.cards_img}>
                  <img className={s.img} src={car} alt="car" />
               </div>
               <div className={s.cards_text}>
                  <h2>Новая битопливная Lada Vesta  в “Бери Рули”</h2>
                  <p>06.03.2022</p>
                  <Link to={'/detail_stock'}>

                     <button className={s.btn_detail_cars}>Подробнее</button>
                  </Link>
               </div>
            </div>
            <div className={s.cars_block}>
               <div className={s.cards_img}>
                  <img className={s.img} src={car} alt="car" />
               </div>
               <div className={s.cards_text}>
                  <h2>Новая битопливная Lada Vesta  в “Бери Рули”</h2>
                  <p>06.03.2022</p>
                  <Link to={'/detail_stock'}>

                     <button
                        className={s.btn_detail_cars}>Подробнее</button>
                  </Link>
               </div>
            </div>
            <div className={s.padination}>
               <Pagination  count={10} variant="outlined" shape="rounded" color="primary" />
            </div>
         </div>



      </div>
   )
};

export default Stock;