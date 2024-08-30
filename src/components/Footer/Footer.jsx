import { Link } from 'react-router-dom'
import kasaLogoWhite from '../../assets/logo-white.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={kasaLogoWhite} alt="Kasa Logo" width={100} />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
