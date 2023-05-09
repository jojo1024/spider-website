import { useEffect, useState, useCallback, useRef } from 'react'
import {
    Link,
    useMatch,
    useResolvedPath,
    useLocation
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { apiClient, SERVER_BASE_URL, } from '../helpers/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import { IInfo, setAllFlashInfo } from '../store/flashInfoSlice';
import { IReduxState } from '../store';
import { IBanner, setAllBanner } from '../store/bannerSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skeleton from 'react-loading-skeleton';
import { setScrollToTop } from '../store/appSlice';




const Header = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();
    let pathName = location.pathname.substring(1);

    const [isSticky, setIsSticky] = useState(false);

    const dispatch = useDispatch();
    const { allFlashInfo } = useSelector((state: IReduxState) => state.flashInfo);
    const { scrollToTop } = useSelector((state: IReduxState) => state.application);
    const { allBanner } = useSelector((state: IReduxState) => state.banner);
    const onHomePage = window.location.pathname

    // Pour qu'à chaque fois qu'on change d'onglet le top de la page s'affiche 
    const myDivRef = useRef<any>(null);
    const scrollToDiv = () => {
        myDivRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToDiv()
    }, [scrollToTop])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // active le défilement automatique
        autoplaySpeed: 6000, // interval de 6 secondes entre chaque slide
    };

    // Si on scroll vers le bas on met le sticky à true pour changer le logo et faire apparaitre une bande blanche au dessus de la bannière
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const CustomLink = ({ children, to, ...props }: LinkProps) => {
        // Si l'url sur laquel on clique coorespond à ce qui est dans la barre de recherche, on met ce dernier en surbrillance
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
            <div>
                <Link
                    onClick={() => dispatch(setScrollToTop(!scrollToTop))}
                    className={`nav-item nav-link ${match && 'active'}`}
                    style={{ textDecoration: "none", fontSize: '1.3em' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    const recupFlashInfo = async () => {
        try {
            const res: any = await apiClient.get(
                SERVER_BASE_URL,
                "/recupflashinfo"
            );
            if (res.status === 1) {
                dispatch(setAllFlashInfo(res.data))
            }
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const recupBanner = async () => {
        try {
            const res: any = await apiClient.get(
                SERVER_BASE_URL,
                "/recupbanniere"
            );
            if (res.status === 1) {
                dispatch(setAllBanner(res.data))
            }
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        recupBanner();
        recupFlashInfo();
    }, [])

    return (
        <div ref={myDivRef} className="position-relative p-0" >
            <nav className={isSticky ? " navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm" : "navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"} >
                <Link to="/" className="navbar-brand p-0 ">
                    {
                        isSticky ?
                            <img src="SPIDER-PHOTO/LOGO-SPIDER/logo_spider_long.png" alt="Logo" />
                            :
                            <img src="SPIDER-PHOTO/LOGO-SPIDER/LOGO-SPIDER.png" alt="Logo" />
                    }
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <CustomLink to="/" >Accueil</CustomLink>
                        <CustomLink to="/about"  >À Propos</CustomLink>
                        <CustomLink to="/produits" >Produits</CustomLink>
                        <CustomLink to="/equipe" >Équipe</CustomLink>
                        <CustomLink to="/blog" >Blog</CustomLink>
                        <CustomLink to="/galerie" >Galérie</CustomLink>
                        <CustomLink to="/contact" >Contact</CustomLink>
                    </div>
                </div>
            </nav>
            <>
                {/* <!-- Carousel Start --> */}
                <div className="container-fluid fadeIn wow p-0 mb-5" data-wow-delay="0.2s">
                    {
                        loading
                            ?
                            <Skeleton height={400} baseColor='' />
                            :
                            //  On affiche le banner info seulement sur la page d'accueil
                            onHomePage === "/"
                                // On récupère ceux dont l'active est 0
                                ?
                                <Slider {...settings}>
                                    {allBanner?.filter((item: IBanner) => item.active === 0)?.map((item, index) => (
                                        <div key={index} className="item">
                                            {/* <div className="image-overlay-banner"></div> */}
                                            <img
                                                style={{ height: "400px", width: '100%', objectFit: 'cover', backgroundColor: 'gray' }}
                                                src={`${SERVER_BASE_URL}/bannerImages/${item?.libBanniere}`}
                                                alt="Banner de SPIDER TECHNOLOGIES"
                                            />
                                            <div className="text-overlay-banner">

                                            </div>

                                        </div>
                                    ))}
                                </Slider>
                                :
                                <div className="black-header container-fluid fadeIn wow p-0 mb-5" data-wow-delay="0.2s" style={{ height: "100px", backgroundColor: "black" }}> </div>
                    }

                </div>
                {/* On affiche le flash info seulement sur la page d'accueil */}
                {pathName === '' && (
                    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.2s">
                        <div className="container">
                            <div className="info">FLASH INFOS</div>
                            <div className=" shadow" style={{ paddingTop: "15px", backgroundColor: "rgba(0, 0, 0, 0.829)" }}>
                                <div className="scrolling-text-container">
                                    <div className="scrolling-text">
                                        {
                                            allFlashInfo?.filter((item: IInfo) => item.active === 0)?.map((item: IInfo, index: number) => (
                                                <p key={index} style={{ color: "#fff", marginRight: "50px" }}>{item?.titreInfo || "chargement"}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        </div>
    )
}

export default Header