import React from 'react'
import s from './Gallery.module.css'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Gallery = () => {
	return (
		<main className={s.gallery}>
			<h2 className={s.headline}>
				<span>Главная</span> - Акции и новости
			</h2>
			<div className={s.gallery_content}>
				<div className={s.content_block}>
					<div className={s.block_first}>
						<div className={s.block_title}>Новости Бери Рули</div>
						<div className={s.block_item}>
							<button className={s.video_btn}>Видео</button>
							<button className={s.video_btn}>Фото</button>
						</div>
					</div>
					<div className={s.block_second}>
						<a href='#'>Смотреть все</a>
					</div>
				</div>
				<div className={s.content_video}>
					<div className={s.cards}>
						<iframe
							className={s.video}
							width='901'
							height='507'
							src='https://www.youtube.com/embed/9lhYFSRYNiU?list=WL'
							title='MONTAGEM CORAL'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
						<div className={s.card_block}>
							<h3 className={s.card_title}>Почему у нас выгодно?</h3>
							<p className={s.card_text}>
								2 221 просмотр на www.youtube.com от 12 февр. 2020 г.
							</p>
						</div>
					</div>
					<div className={s.cards}>
						<iframe
							className={s.video}
							width='901'
							height='507'
							src='https://www.youtube.com/embed/9lhYFSRYNiU?list=WL'
							title='MONTAGEM CORAL'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
						<div className={s.card_block}>
							<h3 className={s.card_title}>Почему у нас выгодно?</h3>
							<p className={s.card_text}>
								2 221 просмотр на www.youtube.com от 12 февр. 2020 г.
							</p>
						</div>
					</div>
				</div>
				<Stack className={s.pagination} spacing={2}>
					<Pagination count={9} variant='outlined' shape='rounded' />
				</Stack>
			</div>
		</main>
	)
}

export default Gallery
