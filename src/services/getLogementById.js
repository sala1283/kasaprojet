import logements from '../data/logements.json'

export const getLogemementByID = async (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (logements) {
				const foundLogement = logements.find((logement) => logement.id === id)
				if (foundLogement) {
					return resolve(foundLogement)
				} else {
					return resolve(null)
				}
			} else {
				return reject('Impossible de récupérer les logements')
			}
		}, 1000)
	})
}
