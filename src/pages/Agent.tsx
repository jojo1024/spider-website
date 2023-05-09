import React, { useEffect, useState, useCallback } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import WOW from 'wowjs';
import { apiClient, SERVER_BASE_URL } from '../helpers/apiClient';
import { IReduxState } from '../store';
import { IService, setService } from '../store/serviceSlice';
import { IAgent } from '../store/agentSlice';
import Skeleton from 'react-loading-skeleton';
import { setScrollToTop } from '../store/appSlice';


function Agent() {


  //state
  const [selectedItem, setSelectedItem] = useState(0);
  const [data, setData] = useState<any>([])

  //redux
  const dispatch = useDispatch();
  const { allAgent, loadingAgent } = useSelector((state: IReduxState) => state.agent);
  const { service } = useSelector((state: IReduxState) => state.service);
  const myDivRef = React.useRef<any>(null);

  // Pour séléctionner le service à afficher (ex : Tous ou Dévéloppeurs)
  const handleClick = (item: any) => {
    setSelectedItem(item.idService);
  }

  // Filtre les agents en fonction du service sélectionné
  const filterAgent = () => {
    if (selectedItem === 0) {
      setData(allAgent)
    } else {
      const filterData = allAgent.filter((objet: IAgent) => objet?.idService === selectedItem);
      setData(filterData)
    }
  }

  useEffect(() => {
    filterAgent()
  }, [selectedItem, allAgent])

  // Ceée une animation pour les Card
  React.useEffect(() => {
    const wow = new WOW.WOW({
      offset: 100,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const recupService = useCallback(async () => {
    try {
      const res: any = await apiClient.get(
        SERVER_BASE_URL,
        "/recupService"
      );
      if (res.status === 1) {
        dispatch(setService(res.data))
      }
    } catch (error) {

    } finally {
    }
  }, []);

  useEffect(() => {
    recupService();
  }, [])

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
          loadingAgent
            ?
            ([0, 1, 2, 3]).map((item: any, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <Skeleton width={400} height={300} />
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0"><Skeleton width={90} /> </h5>
                    <small> <Skeleton width={150} /> </small>
                  </div>
                </div>
              </div>
            ))
            :
            currentItems &&
            currentItems.map((item: IAgent, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 " >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid"
                      src={`${SERVER_BASE_URL}/equipeImages/${item?.photoAgent}`} alt="" />
                  </div>
                  <div className="text-center p-4 mt-3" style={{ height: "120px" }}>
                    <h5 className="fw-bold mb-0">{item.nomAgent}</h5>
                    <small>{item.fonctionAgent}</small>
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
    const [currentItems, setCurrentItems] = useState([])
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const [pageChange, setPageChange] = useState(true)

    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };

    useEffect(() => {
      setCurrentItems(data.slice(itemOffset, endOffset));
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
          <h6 className="position-relative d-inline text-green ps-4">Notre équipe</h6>
          <h2 className="mt-2">Rencontrez les membres de notre équipe</h2>
        </div>
        {/* Nav start */}
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li className={`btn px-3 pe-4 ${0 === selectedItem ? 'active' : ''}`} onClick={() => setSelectedItem(0)}   >Tous</li>
              {service?.map((item: IService, index: number) => (
                <li key={index} className={`btn px-3 pe-4 ${item?.idService === selectedItem ? 'active' : ''}`} onClick={() => { handleClick(item) }} data-filter="*"   >{item?.libService}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Nav end */}
        <div className="row g-4 portfolio-container pb-5 wow fadeInUp" data-wow-delay="0.1s">
          <PaginatedItems itemsPerPage={8} />
        </div>
      </div>
    </div>
  )
}

export default Agent