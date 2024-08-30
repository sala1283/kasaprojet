import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLogemementByID } from '../../services/getLogementById'
import Banner from '../../components/Banner/Banner'
import './Logement.scss'
import { showToast } from '../../components/Toaster/Toaster'
import Collapse from '../../components/Collapse/Collapse'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Logement({ setShowLoader }) {
	const { logementId } = useParams()
	const [logement, setLogement] = useState(null)
	const [isError, setIsError] = useState(false)
	const [loading, setIsLoading] = useState(true)

	useEffect(() => {
		getLogemementByID(logementId)
			.then((logement) => {
				setLogement(logement)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
				showToast(
					'Désolé, mais une erreur est survenue. Essayez de rafraîchir la page.',
					'error',
					10000
				)
				setIsError(true)
				setIsLoading(false)
			})
	}, [logementId])

	useEffect(() => {
		setShowLoader(loading)
	}, [setShowLoader, loading])

	useEffect(() => {
		document.title = logement
			? 'Kasa | ' + logement.title
			: !logement
			? 'Kasa | Logement'
			: 'Erreur 404'
	}, [logement])

	const { title, location, tags, host, rating, description, equipments } =
		logement || {}

	return loading ? (
		<main></main>
	) : logement ? (
		<main>
			<Banner page='logement' logement={logement}></Banner>
			<article className='logement-info'>
				<header>
					<h1 className='logement-info__title'>{title}</h1>
					<p className='logement-info__location'>{location}</p>
					<ul className='logement-info__tags'>
						{tags.map((tag, index) => (
							<li key={`${tag}-${index}`}>{tag}</li>
						))}
					</ul>
				</header>
				<section className='logement-info__host'>
					<figure>
						<img src={host.picture} alt={`${host.name}`} />
						<figcaption>
							<p>{host.name}</p>
						</figcaption>
					</figure>
					<ul className='rating'>
						{[...Array(5)].map((_, index) => {
							const isFull = index < rating
							return (
								<li key={index} className='rating__item'>
									<i
										className={`fa-solid fa-star ${
											isFull ? `star-${index + 1}` : ''
										}`}
									></i>
								</li>
							)
						})}
					</ul>
				</section>
			</article>
			<section className='logement-info__collapse'>
				<Collapse title='Description' content={description}>
					<p>{description}</p>
				</Collapse>
				<Collapse title='Équipements'>
					<ul>
						{equipments.map((equipements, index) => (
							<li key={`${equipements}-${index}`}>{equipements}</li>
						))}
					</ul>
				</Collapse>
			</section>
		</main>
	) : !isError ? (
		<main className='error__container'>
			<ErrorMessage
				errorMessage="Oops! Le logement auquel vous souhaitez accéder n'existe pas"
				codeError='404'
			/>
		</main>
	) : (
		<main className='error__container'>
			<ErrorMessage
				errorMessage='Oops! Une erreur est survenue. Essayez de rafraîchir la page'
				codeError='500'
			/>
		</main>
	)
}

export default Logement
