import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import s from './Swiper.module.css'
import swiper1 from '../../../../../assets/Bayaman/swiper1.png'
import swiper2 from '../../../../../assets/Bayaman/swiper2.png'
import swiper3 from '../../../../../assets/Bayaman/swiper3.png'
import swiper4 from '../../../../../assets/Bayaman/swiper4.png'
import swiper5 from '../../../../../assets/Bayaman/swiper5.png'
import swiper_big_bro from '../../../../../assets/Bayaman/swiper_big_bro.png'

const Swipers = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
					'--swiper-pagination-color': '#000',
				}}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className={s.mySwiper2}
			>
				<SwiperSlide>
					<img className={s.swiper_img} src={swiper_big_bro} />
				</SwiperSlide>
				<SwiperSlide>
					<img className={s.swiper_img} src={swiper2} />
				</SwiperSlide>
				<SwiperSlide>
					<img className={s.swiper_img} src={swiper3} />
				</SwiperSlide>
				<SwiperSlide>
					<img className={s.swiper_img} src={swiper4} />
				</SwiperSlide>
				<SwiperSlide>
					<img className={s.swiper_img} src={swiper5} />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={s.mySwiper}
			>
				<SwiperSlide>
					<img src={swiper1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={swiper2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={swiper3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={swiper4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={swiper5} />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Swipers
