import React from 'react'
import s from './MainPage.module.css'
import CatalogNoMileage from './MainPageComponents/CatalogNoMileage/CatalogNoMileage'
import ContentAuto from './MainPageComponents/ContentAuto/ContentAuto'
import ContentBenefit from './MainPageComponents/ContentBenefit/ContentBenefit'
import ContentCriteria from './MainPageComponents/ContentCriteria/ContentCriteria'
import StepsToGetAuto from './MainPageComponents/StepsToGetAuto/StepsToGetAuto'
import ContentForm from './MainPageComponents/ContentForm/ContentForm'
import ForRegistration from './MainPageComponents/ForRegistration/ForRegistration'
import ArrendaAuto from './MainPageComponents/ArrendaAuto/ArrendaAuto'

const MainPage = () => {
	return (
		<main>
			<div className={s.container}>
				<ContentAuto />
				<ContentCriteria />
				<ContentBenefit />
				<ForRegistration />
				<CatalogNoMileage text='Каталог автомобилей с пробегом' />
				<StepsToGetAuto />
				<CatalogNoMileage text='Каталог автомобилей без пробега' />
				<ArrendaAuto />
				<ContentForm />
			</div>
		</main>
	)
}

export default MainPage
