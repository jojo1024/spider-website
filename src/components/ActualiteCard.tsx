import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { IReduxState } from '../store';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { downloadFile, handleDownload } from '../helpers/functions';
import { IActualite } from '../store/actualiteSlice';
import { setScrollToTop } from '../store/appSlice';

function ActualiteCard() {
    
    const dispatch = useDispatch();
    const { allActualite, loadingActualite } = useSelector((state: IReduxState) => state.actualite);
    const { scrollToTop } = useSelector((state: IReduxState) => state.application);
    const { allSpiderVersions, loadingSpiderVersion } = useSelector((state: IReduxState) => state.spiderVersion);
    // On récupère tous les actualités à la une et ceux qui sont actives (active = 0 => afficher, 1 => pas afficher)
    const actualiteALaUne = allActualite?.filter((item: IActualite) => item?.aLaUne === 1 && item?.active === 0)
    return (
        <div className="container-xxl mb-4 ">
            <div className="container px-lg-5">
                <div className="row g-4 ">
                    <div className='col-lg-8 wow fadeInUp order-last order-lg-first  ' data-wow-delay="0.1s">
                        <div className=" shadow rounded   p-1">
                            <div className="row g-2 ">
                                <div className='col-lg-5 '>
                                    {loadingActualite
                                        ?
                                        <Skeleton height={250} />
                                        :
                                        <img className="img-fluid  " alt={"Image actualité de SPIDER TECHNOLOGIES"}
                                            src={`${SERVER_BASE_URL}/actualitesImages/${actualiteALaUne[0]?.actualiteImage}`}
                                            style={{ objectFit: "cover", height: "250px", width: "100%" }}
                                        />
                                    }
                                </div>
                                <div className='col-lg-7 '>
                                    <div className='p-2' style={{ flexDirection: 'column' }}>
                                        <div >
                                            {loadingActualite
                                                ?
                                                <Skeleton width={70} />
                                                :
                                                <div >
                                                    publié le {actualiteALaUne[0]?.dateActualite}
                                                </div>
                                            }
                                            <div className="section-title position-relative mb-4 pb-2">
                                                {
                                                    loadingActualite
                                                        ?
                                                        <Skeleton width={310} />
                                                        :
                                                        <h5 className="mt-2">{actualiteALaUne[0]?.titre}</h5>
                                                }
                                            </div>
                                        </div>
                                        <div >
                                            {
                                                loadingActualite
                                                    ?
                                                    <Skeleton count={3} />
                                                    :
                                                    <p>
                                                        {actualiteALaUne[0]?.texteComplet.slice(0, 222)}...
                                                    </p>
                                            }
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            {
                                                loadingActualite
                                                    ?
                                                    <Skeleton width={70} />
                                                    :
                                                    <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))}  className="buttons rounded-pill px-3 py-1 me-1 mt-2" to="/actualite">Voir plus</Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 wow zoomIn order-first order-lg-last " data-wow-delay="0.1s" >
                        <div className=" shadow rounded  text-center mb-5 pb-2 pt-4 " >
                            <h6 className=" d-inline text-black  " style={{ paddingBottom: "10px" }}>
                                {
                                    loadingSpiderVersion
                                        ?
                                        <Skeleton width={250} />
                                        :
                                        `Spider : version ${allSpiderVersions[0]?.versionNumber} | Date ${allSpiderVersions[0]?.versionDate}`
                                }
                            </h6>

                            <div>
                                {
                                    loadingSpiderVersion
                                        ?
                                        <Skeleton width={160} style={{ marginTop: "15px" }} />
                                        :
                                        <div
                                            className="cont btn bt text-light rounded py-2 px-4 mt-4 "
                                            onClick={() => handleDownload(`${SERVER_BASE_URL}/downloadSpider/${allSpiderVersions[0]?.versionFileLocation}`, `${allSpiderVersions[0]?.versionFileLocation}`)}

                                        >
                                            Téléchargez <i className="fa fa-download px-2" ></i>
                                        </div>
                                }
                            </div>
                            <div className='mt-4'>
                            {loadingSpiderVersion
                            ?
                            <Skeleton width={240} style={{ marginTop: "5px" }} />
                            :
                                <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))}  className="text-green px-3 py-1 me-1 mt-4" to="/mise-a-jour-anterieur">Voir les mises à jour antérieures</Link>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActualiteCard