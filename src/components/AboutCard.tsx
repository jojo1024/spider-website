import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
// @ts-ignore
import WOW from 'wowjs';
import colors from '../helpers/colors';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../store';
import { setScrollToTop } from '../store/appSlice';
import { SERVER_BASE_URL, apiClient } from '../helpers/apiClient';
import { setNombreEtablissement } from '../store/etablissementSlice';

export interface IAbout {
    paragraphe1: string;
    paragraphe2?: string;
    paragraphe3?: string;
}

const AboutCard: React.FC<IAbout> = (props) => {

    const dispatch = useDispatch();
    const { paragraphe1, paragraphe2, paragraphe3 } = props
    const { allAgent } = useSelector((state: IReduxState) => state.agent);
    const { nombreEtablissement } = useSelector((state: IReduxState) => state.etablissement);
    const { scrollToTop } = useSelector((state: IReduxState) => state.application);

    // Crée une animation pour les card
    React.useEffect(() => {
        const wow = new WOW.WOW({
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }, []);

    const date = new Date();

    const recupNombreEtablissement = async () => {
        try {
            const res: any = await apiClient.get(
                SERVER_BASE_URL,
                "/recupnombreetablissement"
            );
            if (res.status === 1) {
                dispatch(setNombreEtablissement(res.data))
            }
        } catch (error) {
        } finally {
        }
    };

    React.useEffect(() => {
        recupNombreEtablissement();
    }, [])

    return (
        <>
            {/* // <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container px-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-5">
                        <div className="col-lg-7 " >
                            <div className="section-title position-relative mb-4 pb-2">
                                <h6 className="text-green position-relative ps-4">A propos de nous</h6>
                                <h2 className="mt-2">Nous dévéloppons des solutions technologiques innovantes</h2>
                            </div>
                            <p className="mb-4">

                                {paragraphe1}
                            </p>
                            <p className="mb-4">

                                {paragraphe2 && paragraphe2}
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-green me-2"></i>Satisfaction clientèle</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-green me-2"></i>Equipe professionnelle</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-green me-2"></i>Assistance 24/7</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-green me-2"></i>Veille technologique</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))} className="buttons rounded-pill px-4 py-2 me-3" to="/about">Voir plus</Link>
                                <Link className="buttons btn-square me-3" to="https://www.facebook.com/spdbtech" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="buttons btn-square me-3" to="https://www.youtube.com/@spidertechnologiesci6995" target="_blank"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center ">
                            <div className="row g-3">
                                <div className="col-6 text-end" >
                                    <div className="wow zoomIn rounded p-1" data-wow-delay="0.2s">
                                        <div className="border newsletter rounded text-center p-4" style={{ backgroundColor: colors.primary }}>
                                            <i className="fa fa-users-cog fa-2x  mb-2" style={{ color: colors.white }}></i>
                                            <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                                {/* 56 */}
                                                {
                                                    <CountUp start={0} end={allAgent?.length} duration={15} delay={0} />
                                                }
                                            </h2>
                                            <p className="mb-0" style={{ color: colors.white }}>Employés</p>
                                        </div>
                                    </div>                            </div>
                                <div className="col-6 text-start">
                                    <div className="wow zoomIn rounded p-1" data-wow-delay="0.3s">
                                        <div className="border newsletter rounded text-center p-4" style={{ backgroundColor: colors.primary }}>
                                            <i className="fa fa-school fa-2x  mb-2" style={{ color: colors.white }}></i>
                                            <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                                {
                                                    <CountUp start={0} end={nombreEtablissement} duration={10} delay={0} />
                                                }
                                            </h2>
                                            <p className="mb-0" style={{ color: colors.white }}>Etablissements scolaires</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-end">
                                </div>
                                <div className="col-6 text-start">
                                    <div className=" rounded p-1">
                                        <div className="border newsletter rounded text-center p-4" style={{ backgroundColor: colors.primary }}>
                                            <i className="fa fa-check-circle fa-2x  mb-2" style={{ color: colors.white }}></i>
                                            <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                                {
                                                    <CountUp start={0} end={date.getFullYear() - 2011} duration={15} delay={0} />
                                                }
                                            </h2>
                                            <p className="mb-0" style={{ color: colors.white }}>Années d'expérience</p>
                                        </div>
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <p className="mt-4 " >
                                {paragraphe3 && paragraphe3}
                            </p>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}

export default AboutCard