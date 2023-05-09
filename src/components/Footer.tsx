import { useDispatch, useSelector } from 'react-redux';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'
import { IReduxState } from '../store';
import { IContact } from '../store/contactSlice';
import { setScrollToTop } from '../store/appSlice';


function Footer() {

    const dispatch = useDispatch();
    const { allContact } = useSelector((state: IReduxState) => state.contact);
    const year = new Date()

    const CustomLink = ({ children, to, ...props }: LinkProps) => {
        // Si l'url sur laquel on clique coorespond à ce qui est dans la barre de recherche, on met ce dernier en surbrillance
        return (
            <div>
                <Link
                    onClick={() => dispatch(setScrollToTop(to))}
                    className="btn btn-link"
                    style={{ textDecoration: "none", fontSize: '1.3em' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    return (
        <div className=" container-fluid text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: "#3ad225" }}>
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6">
                        <h5 className="text-white mb-4">Contactez-nous</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i>Yopougon Kenya, au feu de Cosmos derrière la station Total Ficgayo</p>
                        {allContact?.map((item: IContact, index: number) => (
                            <p key={index}>
                                <i className="fa fa-phone-alt me-3"></i>
                                {item.libContact} : {item.numero}
                            </p>
                        ))}
                        <p><i className="fa fa-envelope me-3"></i>info@spiderci.com</p>
                        <div className="d-flex pt-2">
                            <Link className="buttons btn-square me-3" to="https://www.facebook.com/spdbtech" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="buttons btn-square me-3" to="https://www.youtube.com/@spidertechnologiesci6995" target="_blank"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-white mb-4">Liens</h5>
                        <CustomLink  to="/">Accueil</CustomLink>
                        <CustomLink  to="/about">À propos</CustomLink>
                        <CustomLink  to="/produits">Produits</CustomLink>
                        <CustomLink  to="/equipe">Équipe</CustomLink>
                        <CustomLink  to="/blog">Blog</CustomLink>
                        <CustomLink  to="/galerie">Galérie</CustomLink>
                        <CustomLink  to="/contact">Contact</CustomLink>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Abonnez-vous à notre newsletter pour recevoir nos dernières actualités</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Votre email" style={{ height: "48px" }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-green fs-4"></i></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            copyright  &copy; {year.getFullYear()}<a className="border-bottom" href="#"> Spider Technologies</a>, Tous droits reservés.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer