import logements from '../data/logements.json'

export const getLogements = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (logements) {
				resolve(logements)
			} else {
				reject('Impossible de récupérer les logements')
			}
		}, 1000)
	})
}
