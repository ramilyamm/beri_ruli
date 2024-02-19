import React from 'react'
import s from './VacancyVideo.module.css'

const VacancyVideo = () => {
	return (
		<section className={s.vacancy_video}>
			<div className={s.video_text}>
				<h2 className={s.video_title}>
					Видео о команде <span>«Бери Рули»</span>
				</h2>
				<p>
					Наши сотрудники рассказывают, как устроена работа в «Бери Рули», чем
					занимается каждый отдел и как им удается делать свою работу нужной и
					полезной
				</p>
			</div>
			<iframe
				className={s.video}
				width='901'
				height='507'
				src='https://www.youtube.com/embed/JB4pA-K1oUE?list=WL'
				title='Shawn Mendes - Stitches (Lyrics) | 1 HOUR'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			></iframe>
		</section>
	)
}

export default VacancyVideo
