import React from 'react'
// @ts-ignore
import WOW from 'wowjs';
function Blog() {

    React.useEffect(() => {
        const wow = new WOW.WOW({
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-green ps-4">Notre blog</h6>
                    <h2 className="mt-2">Decouvrez notre blog</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="SPIDER-PHOTO/AUTRES/orange-money.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-2">
                                <div className=" mb-3">
                                    <h5 className="mb-0">COMMENT AFFECTER SON ENFANT ?</h5>

                                </div>
                                <p className='text-green'>Via son télephone portable</p>
                                <div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Envoyer DOB par SMS au 911 ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Entrer le matricule de l'élève ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Demander une affectation ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Entrer le numero de portable du parent demandeur ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Choisir le Numero du type d'établissement (Public - Privé) 7 ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Choisir le quartier pour les établissements privés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="SPIDER-PHOTO/AUTRES/orange-money.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-2">
                                <div className=" mb-3">
                                    <h5 className="mb-0">COMMENT S'INSCRIRE EN LIGNE ?</h5>

                                </div>
                                <div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Pour ORANGE-CI : #144*42# ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Pour MTN : *133*200# ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Pour MOOV : *155*7*6#.
                                        </p>
                                    </div>
                                    <p>
                                        NB :  Si vous êtes un nouvel entrant et que vous n'êtes pas reconnu dans le fichier 2019-2020, prenez attache avec votre établissement pour régulariser votre situation auprès de la DSPS avant d'effectuer votre inscription. En résumé : Votre préinscription 2020-2021 dépend de deux éléments : Votre présence dans le fichier national (matricule valide) Votre inscription et actualisation dans le fichier 2019-2020 (pour les anciens) ou Votre Décision d'Affectation ou d'Orientation 2020-2021 (pour les nouveaux)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="room-item shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="SPIDER-PHOTO/AUTRES/orange-money.jpg" alt="" />
                            </div>
                            <div className="p-4 mt-2">
                                <div className=" mb-3">
                                    <h5 className="mb-0">COMMENT AFFECTER SON ENFANT ?</h5>

                                </div>
                                <p className='text-green'>Via son télephone portable</p>
                                <div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Envoyer DOB par SMS au 911 ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Entrer le matricule de l'élève ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Demander une affectation ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Entrer le numero de portable du parent demandeur ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Choisir le Numero du type d'établissement (Public - Privé) 7 ;
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" position-relative ps-4">
                                            <i className="fa fa-check  me-2 text-green"></i>
                                            Choisir le quartier pour les établissements privés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog