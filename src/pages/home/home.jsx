import Banner from '../../components/Banner/Banner'
import { useState, useEffect } from 'react'
import { getLogements } from '../../services/getLogements'
import Card from '../../components/Card/Card'
import './home.scss'
import { showToast } from '../../components/Toaster/Toaster'

function Home({ setShowLoader }) {
	const [logements, setLogements] = useState([])
	const [loading, setIsLoading] = useState(true)

	useEffect(() => {
		getLogements()
			.then((logements) => {
				setLogements(logements)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
				showToast(
					'Désolé, mais une erreur est survenue. Essayez de rafraîchir la page.',
					'error'
				)
				setIsLoading(false)
			})
		document.title = 'Kasa | Accueil'
	}, [setIsLoading])

	return loading ? (
		<main>{setShowLoader(true)}</main>
	) : (
		<main id='home'>
			{setShowLoader(false)}
			<Banner page='home'>
				<h1>Chez vous, partout et ailleurs</h1>
			</Banner>
			<section id='card-container'>
				{logements.map((logement) => {
					const { id, title, cover } = logement
					return <Card key={id} title={title} cover={cover} id={id} />
				})}
			</section>
		</main>
	)
}

export default Home