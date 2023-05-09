import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { IReduxState } from '../store';
import { Link } from 'react-router-dom';
import { IActualite } from '../store/actualiteSlice';
import { setScrollToTop } from '../store/appSlice';

function Actualite() {

    const dispatch = useDispatch();
    const { allActualite } = useSelector((state: IReduxState) => state.actualite);
    const { scrollToTop } = useSelector((state: IReduxState) => state.application);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const scrollRef: any = useRef([]);

    const scrollToSection = (id: any) => {
        if (scrollRef.current.length) {
            scrollRef.current[id].scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        if (selectedItem !== null) {
            scrollToSection(selectedItem);
        }
    }, [selectedItem]);

    return (
        <div className="container-xxl py-2">
            <div className="container px-lg-5">
                <div className="row  g-5" >
                    <div className="col-lg-8 order-last order-lg-first ">
                        {
                            allActualite && allActualite.map((item: IActualite, index: number) => (
                                <div
                                    ref={(ref) => (scrollRef!.current[item.idActualite]! = ref)}

                                    key={index} className=" shadow mb-3 p-4"
                                >
                                    <img className="img-fluid flex-shrink-0  " alt={"Logo G. S. LES LAUREADES COCODY"}
                                        src={`${SERVER_BASE_URL}/actualitesImages/${item?.actualiteImage}`}
                                        style={{ objectFit: "cover", width: "100%", }}
                                    />
                                    <div className='pt-2'>publié le {item?.dateActualite}</div>
                                    <div className='titre_actualite'> {item?.titre}</div>
     
                                    <div className="section-title position-relative mb-4 pb-2">
                                        <h2 className="mt-2">{item?.sousTitre}</h2>
                                    </div>
                                    <div >
                                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: item?.texteComplet.replace(/\n/g, '<br>') }}></div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))} className="buttons rounded-pill px-3 py-1 me-1 mt-2" to={`/spider-galerie-detail?id=${item.idDossier}`}>Voir les images</Link>
                                    </div>
                                </div>
                            ))
                        }
                       
                    </div>

                    <div className="col-lg-4 order-first order-lg-last">
                        <div className='p-4 shadow' >
                            {/* On affiche que les actualités qui sont actives cest à dire active  = 0 */}
                            {allActualite
                                .filter((item: IActualite) => item.active === 0)
                                .map((item: IActualite, index: number) => (
                                    <div key={index}>
                                        <div  className={`d-flex align-items-center mb-3 `} style={{ cursor: 'pointer' }} onClick={() => setSelectedItem(item.idActualite)}>
                                            <img
                                                className="img-fluid flex-shrink-0 rounded"
                                                src={`${SERVER_BASE_URL}/actualitesImages/${item?.actualiteImage}`}
                                                style={{ width: "50px", height: "50px" }}
                                                alt={"Image actualité de SPIDER TECHNOLOGIES"}
                                            />
                                            <div className="ps-3">
                                                <h6 className={`mb-1 ${item.idActualite === selectedItem ? "text-green" : ""}`}>{item?.titre}</h6>
                                                <small>{item?.dateActualite}</small>
                                            </div>
                                        </div>
                                        <hr className="bg-green mx-auto mt-0" />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actualite