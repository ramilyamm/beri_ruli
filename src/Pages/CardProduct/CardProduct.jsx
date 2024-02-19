import React from 'react'
import s from './CardProduct.module.css'
import DetailAuto from './CardProductComponent/DetailAuto/DetailAuto'
import ForRegistration from '../MainPage/MainPageComponents/ForRegistration/ForRegistration'
import CatalogMileage from './CardProductComponent/CatalogMileage/CatalogMileage'
import CardProductForm from './CardProductComponent/CardProductForm/CardProductForm'
import StepsToGetAuto from '../MainPage/MainPageComponents/StepsToGetAuto/StepsToGetAuto'
import NextMove from './CardProductComponent/NextMove/NextMove'
import ContentForm from '../MainPage/MainPageComponents/ContentForm/ContentForm'

const CardProduct = () => {
	return (
		<main className={s.card_product}>
			<p className={s.card_product_text}>
				<span>Главная</span> - Каталог авто - ВАЗ (LADA) 217230 (Приора хетчбек)
			</p>
			<DetailAuto />
			<ForRegistration />
			<CatalogMileage />
			<CardProductForm />
			<StepsToGetAuto params='m' />
			<NextMove />
			<ContentForm />
		</main>
	)
}

export default CardProduct
