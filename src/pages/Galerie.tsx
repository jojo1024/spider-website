import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// @ts-ignore
import WOW from 'wowjs';
import { IReduxState } from '../store';
import { IGalerie } from '../store/galerieSlice';
import Skeleton from 'react-loading-skeleton';
import { setScrollToTop } from '../store/appSlice';
const _ = require('lodash');



function Galerie() {

  const dispatch = useDispatch();
  const { allDossier, loadingGalerie } = useSelector((state: IReduxState) => state.galerie);
  const { scrollToTop } = useSelector((state: IReduxState) => state.application);
  // Récuperer le libellé des dossiers
  const uniqueDossier = _.uniqBy(allDossier, "libDossier")
 

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
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-green ps-4">Notre galérie</h6>
          <h2 className="mt-2">Visitez notre galérie</h2>
        </div>
        <div className="row g-4 justify-content-center ">
          {
            loadingGalerie
            ?
            ([0,1,2,3]).map((item: any, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded  overflow-hidden">
                  <div className="position-relative">
                    <div
                      className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3" >
                    {
                    
                      <Skeleton width={100} height={100} />
                      
                    }
                    <h5 className="fw-bold mb-0"><Skeleton width={150} /></h5>
                    <small><Skeleton width={90} /></small>
                  </div>
                </div>
              </div>
            ))
            :
            uniqueDossier?.map((item: IGalerie, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded  overflow-hidden">
                  <div className="position-relative">                   
                  </div>
                  <div className="text-center p-4 mt-3" >
                    <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))} to= {`/spider-galerie-detail?id=${item.idDossier}`}><i className="fa fa-folder fa-10x" style={{color:"#b3b3b3"}}></i></Link>
                    <h5 className="fw-bold mb-0">{item.libDossier}</h5>
                    <small>{item.dateCreation}</small>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Galerie