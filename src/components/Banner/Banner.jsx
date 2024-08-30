import Slideshow from '../Slideshow/Slideshow'
import './Banner.scss'

const bannerImages = {
  home: require('../../assets/banner/home.png'),
  about: require('../../assets/banner/about.png'),
}

function Banner({ page, children, logement }) {
  return (
    <>
      {page === 'logement' && logement ? (
        <>
          <Slideshow pictures={logement.pictures} />
        </>
      ) : (
        <div className="banner">
          <img src={bannerImages[page]} alt={`${page} banner`} />
          {children}
        </div>
      )}
    </>
  )
}

export default Banner
