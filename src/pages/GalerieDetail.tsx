import { useState, useEffect, useRef } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { IReduxState } from '../store';
import { IGalerie } from '../store/galerieSlice';
import DataNotFound from './DataNotFound';
import ErrorPage from './ErrorPage';
import { Button, Modal } from 'react-bootstrap';

function GalerieDetail() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // Récupérer l'id du dossier qui est passé en paramètre dans l'url
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const numberId = Number(id)
    const myDivRef = useRef<any>(null);

    const { allDossier } = useSelector((state: IReduxState) => state.galerie);
    // FIlter les images en fonctions du dossier sélectionné
    const filterData: any = allDossier.filter((objet: IGalerie) => objet.idDossier === numberId);

    if (isNaN(numberId) && id !== "null") {
        return (<ErrorPage />)
    }

    if (filterData.length === 0) {
        return (<DataNotFound />)
    }

    function Items({ currentItems, pageChange }: any) {

        // Pour qu'à chaque fois qu'on change de page le top de la page s'affiche 
        const scrollToDiv = () => {
            myDivRef?.current?.scrollIntoView({ behavior: 'smooth' });
        };
        useEffect(() => {
            scrollToDiv()
        }, [pageChange])

        return (
            <>
                {
                    currentItems &&
                    currentItems.map((item: any, index: number) => (
                        <div key={index} className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                            <div className="position-relative rounded overflow-hidden">
                                <img
                                    className="img-fluid w-100"
                                    src={`${SERVER_BASE_URL}/galerieImages/${item?.libImage}`}
                                    alt=""
                                />
                                <div className="portfolio-overlay" style={{background: "transparent"}}>
                                    <a className="btn btn-light" href={`${SERVER_BASE_URL}/galerieImages/${item?.libImage}`} target='_blank' data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                    {/* <div className="mt-auto">
                                        <small className="text-white"><i className="fa fa-folder me-2"></i>{item.dateCreation}</small>
                                        <div className="h5 d-block text-white mt-1 mb-0" >{item.libDossier}</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </>
        );
    }

    function PaginatedItems({ itemsPerPage }: any) {

        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const [currentItems, setCurrentItems] = useState([])
        const pageCount = Math.ceil(filterData.length / itemsPerPage);
        const [pageChange, setPageChange] = useState(true)

        const handlePageClick = (event: any) => {
            const newOffset = (event.selected * itemsPerPage) % filterData.length;
            setItemOffset(newOffset);
        };

        useEffect(() => {
            setCurrentItems(filterData.slice(itemOffset, endOffset));
        }, [itemOffset, endOffset])

        return (
            <>
                <Items currentItems={currentItems} pageChange={pageChange} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Suivant >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Précédent"
                    renderOnZeroPageCount={undefined}
                    containerClassName="pagination"
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-num'
                    activeLinkClassName='active'
                    onClick={() => setPageChange(!pageChange)}
                />
            </>
        );
    }
    return (
        <div ref={myDivRef} className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-green ps-4">Notre galérie</h6>

                    <h2 className="mt-2">{filterData[0]?.libDossier} - {filterData[0]?.dateCreation}</h2>
                </div>
                <div className="row g-4 portfolio-container pb-5">
                    <PaginatedItems itemsPerPage={9} />
                </div>

            </div>
        </div>
    )
}

export default GalerieDetail