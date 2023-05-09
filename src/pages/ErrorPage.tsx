import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container px-lg-5 text-center">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-green"></i>
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page introuvable</h1>
                <p className="mb-4">Nous sommes désolés, la page que vous avez cherchée n'existe pas sur notre site web ! Vous pouvez peut-être aller sur notre page d'accueil.</p>
                <Link className="cont text-white rounded-pill py-3 px-5" to="/">Aller à l'acceuil</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ErrorPage