import React, { useEffect, useRef } from 'react'
import ProduitsCard from '../components/ProduitsCard'
// @ts-ignore
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../store';
import { ISpiderApp } from '../store/spiderAppSlice';
import { setScrollToTop } from '../store/appSlice';
const _ = require('lodash');


function Produits() {

  const dispatch = useDispatch();
  const { scrollToTop } = useSelector((state: IReduxState) => state.application);
  const { allSpiderApp , loadindSpiderApp} = useSelector((state: IReduxState) => state.spiderApp);
  // Si on est sur la page produit on affiche tous les produits sinon on affiche que 6 sur la page d'accueil
  const onProduitPage = window.location.pathname.split("/")[1]
  const uniqueSpiderApp = onProduitPage === "produits" ? _.uniqBy(allSpiderApp, "idApp") : _.uniqBy(allSpiderApp, "idApp").slice(0,5) 

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
          <h6 className="position-relative d-inline text-green ps-4">Nos produits</h6>
          <h2 className="mt-2">Ce que nous proposons</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 " >
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="service-icon flex-shrink-0">
                <img alt="spider logo" src={"SPIDER-PHOTO/LOGO-APP/logo-spider.png"} style={{ width: "50px", borderRadius: "20px" }} />
              </div>
              <h5 className="mb-3">Spider</h5>
              <p>Une application dekstop de gestion et de collecte de données pour les établissements scolaires.</p>
              <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))} className="btn px-3 mt-auto mx-auto" to="/spider-detail">Voir plus</Link>
            </div>
          </div>
          {
            uniqueSpiderApp.map((item: ISpiderApp, index: number) => (
              <ProduitsCard
                key={index}
                title={item?.libApp!}
                description={item?.descriptionApp!}
                icon={item?.logoApp!}
                id={item?.idApp}
                loading={loadindSpiderApp}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Produits