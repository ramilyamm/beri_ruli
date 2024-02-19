import React from 'react';
import s from './Photo.module.css'
import photo_1 from '../../assets/Ramilya/photo_1.png'
import photo_2 from '../../assets/Ramilya/photo_2.png'
import photo_3 from '../../assets/Ramilya/photo_3.png'
import Pagination from '@mui/material/Pagination';

const Photo = () => {
    return (
        <div>
            <div className={s.container}>
                <h2 className={s.title_photo}><span>Главная</span> - Акции и новости</h2>
                <section>
                    <h2 className={s.news_block}>Новости  Бери Рули</h2>
                    <div className={s.news_block_btn}>
                        <button className={s.news_video_btn} >Видео</button>
                        <button className={s.news_photo_btn}>Фото</button>
                    </div>
                </section>

                <section>
                    <h2 className={s.watch_all}>Смотреть все</h2>
                    <div className={s.infos_block}>
                        <h2>Автопарк</h2>
                        <h3>Офис</h3>
                        <h3>Команда</h3>
                        <h3>События</h3>
                    </div>
                    <div className={s.photos}>
                        <div className={s.photo_card}>
                            <img src={photo_1} alt="photo1" />
                        </div>
                        <div className={s.photo_card}>
                            <img src={photo_2} alt="photo1" />
                        </div>
                        <div className={s.photo_card}>
                            <img src={photo_3} alt="photo1" />
                        </div>
                        <div className={s.photo_card}>
                            <img src={photo_1} alt="photo1" />
                        </div>
                        <div className={s.photo_card}>
                            <img src={photo_2} alt="photo1" />
                        </div>
                        <div className={s.photo_card}>
                            <img src={photo_3} alt="photo1" />
                        </div>
                    </div>
                </section>
                <div className={s.pagination}>
                    <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
                </div>
            </div>
        </div>

    );
};

export default Photo;