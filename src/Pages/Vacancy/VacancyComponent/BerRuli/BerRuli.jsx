import React from 'react'
import s from './BerRuli.module.css'
import BeriRuliCard from './BeriRuliCard/BeriRuliCard'

const BerRuli = () => {
	return (
		<section className={s.beri_ruli}>
			<h1 className={s.beri_ruli_title}>Вакансии Бери Рули</h1>
			<p className={s.beri_ruli_text}>
				Присоединяйся к нашей команде профессионалов!
			</p>
			<div className={s.beri_ruli_content}>
				<BeriRuliCard />
				<BeriRuliCard />
				<BeriRuliCard />
				<BeriRuliCard />
				<BeriRuliCard />
				<BeriRuliCard />
			</div>
		</section>
	)
}

export default BerRuli
