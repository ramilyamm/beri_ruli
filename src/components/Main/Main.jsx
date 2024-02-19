import React from 'react'
import s from './Main.module.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../../Pages/MainPage/MainPage'
import AboutCompony from '../../Pages/AboutCompony/AboutCompony'
import ArendaAvto from '../../Pages/ArendaAvto/ArendaAvto'
import CardProduct from '../../Pages/CardProduct/CardProduct'
import Catalog from '../../Pages/Catalog/Catalog'
import Contacts from '../../Pages/Contacts/Contacts'
import Dublicates from '../../Pages/Dublicates/Dublicates'
import EnterPersAcc from '../../Pages/EnterPersAcc/EnterPersAcc'
import ForInvestors from '../../Pages/ForInvestors/ForInvestors'
import Gallery from '../../Pages/Gallery/Gallery'
import Photo from '../../Pages/Photo/Photo'
import Reviews from '../../Pages/Reviews/Reviews'
import Stock from '../../Pages/Stock/Stock'
import Team from '../../Pages/Team/Team'
import Vacancy from '../../Pages/Vacancy/Vacancy'
import DetailsStock from '../../Pages/DetailsStock/DetailsStock'
import DetailsVacancy from '../../Pages/DetailsVacancy/DetailsVacancy'
import PersonalAccaunt from '../../Pages/PersonalAccaunt/PersonalAccaunt'
import NotFount from '../../Pages/NotFount/NotFount'
import arrow from '../../assets/Azat/forivestor/Arrow.png'

const Main = () => {
    const toggleScrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }
    return (
        <main>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about_compony' element={<AboutCompony />} />
                <Route path='/arenda_avto' element={<ArendaAvto />} />
                <Route path='/card_product' element={<CardProduct />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/detail_stock' element={<DetailsStock />} />
                <Route path='/detail_vacancy' element={<DetailsVacancy />} />
                <Route path='/dublicates' element={<Dublicates />} />
                <Route path='/enter_pers_acc' element={<EnterPersAcc />} />
                <Route path='/for_investors' element={<ForInvestors />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/personal_account' element={<PersonalAccaunt />} />
                <Route path='/photo' element={<Photo />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/stock' element={<Stock />} />
                <Route path='/team' element={<Team />} />
                <Route path='/vacancy' element={<Vacancy />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
            <button onClick={toggleScrollToTop} className={s.up}>
                <img src={arrow} alt='logo' />
            </button>
        </main>
    )
}

export default Main
