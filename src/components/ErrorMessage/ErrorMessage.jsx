import { Link } from 'react-router-dom'
import './ErrorMessage.scss'

const ErrorMessage = ({ errorMessage, codeError }) => {
  return (
    <section className="error">
      <h1>{codeError}</h1>
      <p>{errorMessage}</p>
      <Link to="/">Retour sur la page d'accueil</Link>
    </section>
  )
}

export default ErrorMessage
