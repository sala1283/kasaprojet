import './Loader.scss'

function Loader({ showLoader }) {
	return (
		<div className={`loader ${showLoader ? 'fade-in' : 'fade-out'}`}>
			<div className='loader__circle'></div>
		</div>
	)
}

export default Loader
