import './Header.scss'
import { NavLink } from 'react-router-dom'
import kasaLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={kasaLogo} alt="Kasa Logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
