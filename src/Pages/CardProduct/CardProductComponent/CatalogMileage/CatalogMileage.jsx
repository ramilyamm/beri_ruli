import React from 'react'
import s from './CatalogMileage.module.css'
import CatalogNoMileage from '../../../MainPage/MainPageComponents/CatalogNoMileage/CatalogNoMileage'

const CatalogMileage = () => {
	return (
		<section className={s.catalog_mileage}>
			<h2 className={s.catalog_mileage_title}>Похожие предложения</h2>
			<CatalogNoMileage
				card_text='VIN-номера проверены'
				params='exist'
				text='Похожие предложения'
			/>
			<CatalogNoMileage card_text='VIN-номера проверены' params='exist' />
			<button className={s.card_pr_btn}>Показать еще</button>
		</section>
	)
}

export default CatalogMileage
