import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Error() {
  return (
    <main className="error__container">
      <ErrorMessage
        errorMessage="Oops! La page à laquelle vous souhaitez accéder n'existe pas"
        codeError="404"
      />
    </main>
  )
}

export default Error
