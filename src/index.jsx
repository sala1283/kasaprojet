import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accueil from './pages/home/home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Error from './pages/Error/Error'

import './index.scss'
import Footer from './components/Footer/Footer'
import Logement from './pages/Logement/Logement'
import Loader from './components/Loader/Loader'
import { StrictMode, useState } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
	const [showLoader, setShowLoader] = useState(false)
	return (
		<Router>
			<Loader showLoader={showLoader} />
			<Header />
			<Routes>
				<Route path='/' element={<Accueil setShowLoader={setShowLoader} />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />} />
				<Route
					path='/logement/:logementId'
					element={<Logement setShowLoader={setShowLoader} />}
				/>
			</Routes>
			<Footer />
		</Router>
	)
}

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
