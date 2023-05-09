import React, { useCallback, useEffect, useRef, useState } from 'react'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; import Header from "./components/Header";
import About from "./pages/About";
import SpiderDetail from './pages/SpiderDetail';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Produits from './pages/Produits';
import Agent from './pages/Agent';
import ErrorPage from './pages/ErrorPage';
import Blog from './pages/Blog';
// @ts-ignore
import WOW from 'wowjs';
import Galerie from './pages/Galerie';
import GalerieDetail from './pages/GalerieDetail';
import socketIO from './socket/SocketIoClient';
import Actualite from './pages/Actualite';
import { apiClient, SERVER_BASE_URL } from './helpers/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import { setAllActualite, setLoadingActualite } from './store/actualiteSlice';
import { setAllAgent, setLoadingAgent } from './store/agentSlice';
import { setAllDossier, setLoadingGalerie } from './store/galerieSlice';
import { useCookies } from "react-cookie";
import { isDev } from './helpers/functions';
import { setServerUrl } from './store/appSlice';
import { IReduxState } from './store';
import { ISpiderVersion, setAllSpiderVersions, setLoadingSpiderVersion } from './store/spiderVersionSlice';
import SpiderMiseAJour from './pages/SpiderMiseAJour';
import { setAllSpiderApp, setLoadindSpiderApp } from './store/spiderAppSlice';
import { setAllContact } from './store/contactSlice';


function App() {
  // const dispatch = useDispatch();
  // const { serverUrl } = useSelector((state: IReduxState) => state.application);

  // const [cookies] = useCookies(["serverUrl"]);



  // /**
  // * au demarrage de l'appli, on récupère l'adresse
  // * du serveur, via les cookies si on est en mode prod.
  // * En mode dev, l'adresse est en dure dans le store
  // * */
  // useEffect(() => {
  //   if (!isDev()) dispatch(setServerUrl(cookies.serverUrl));
  // }, []);

  // useEffect(() => {
  //   if (serverUrl.length > 0) {
  //     socketIO.initialize();
  //   }
  // }, [serverUrl]);

  // React.useEffect(() => {
  //   const wow = new WOW.WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });
  //   wow.init();
  // }, []);



  // // Fonctions
  // const recupActualte = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupactualite"
  //     );
  //     if (res.status === 1) {
  //       dispatch(setAllActualite(res.data))
  //     }
  //   } catch (error) {

  //   } finally {
  //     dispatch(setLoadingActualite(false))
  //   }
  // };


  // const recupAgent = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupagent"
  //     );
  //     if (res.status === 1) {
  //       dispatch(setAllAgent(res.data))
  //     }
  //   } catch (error) {

  //   } finally {
  //     dispatch(setLoadingAgent(false))
  //   }
  // };

  // const recupImageParDossier = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupimagepardossier"
  //     );
  //     if (res.status === 1) {
  //       dispatch(setAllDossier(res.data))
  //     }
  //   } catch (error) {
  //   } finally {
  //     dispatch(setLoadingGalerie(false))
  //   }
  // };

  // const recupSpiderAllVersions = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupspiderallversions"
  //     );
  //     if (res.status === 1) {
  //       let newData = []
  //       newData = res.data.map((item: ISpiderVersion) => { return { ...item, versionDate: new Date(item.versionDate).toLocaleDateString() } })
  //       dispatch(setAllSpiderVersions(newData))
  //     }
  //   } catch (error) {
  //   } finally {
  //     dispatch(setLoadingSpiderVersion(false))
  //   }
  // };

  // // Obtenir toutes les applications de Spider Technologies
  // const recupApplication = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupapplication"
  //     );
  //     if (res.status === 1) {
  //       dispatch(setAllSpiderApp(res.data))
  //     }
  //   } catch (error) {
  //   } finally {
  //     dispatch(setLoadindSpiderApp(false))
  //   }
  // };



  // const recupContact = async () => {
  //   try {
  //     const res: any = await apiClient.get(
  //       SERVER_BASE_URL,
  //       "/recupcontact"
  //     );
  //     if (res.status === 1) {
  //       dispatch(setAllContact(res.data))
  //     }
  //   } catch (error) {
  //   } finally {
  //   }
  // };


  // useEffect(() => {
  //   recupActualte();
  //   recupSpiderAllVersions();
  //   recupAgent();
  //   recupImageParDossier();
  //   recupApplication();
  //   recupContact();
  // }, [])


  return (
    <>

      <div className="container-xxl bg-white p-0">

        {/* <Header /> */}
        <div >
          <Routes>
            <Route path="spider-website/" element={<About />} />
            {/* <Route path="spider-website/about" element={<About />} />
            <Route path="spider-website/produits" element={<Produits />} />
            <Route path="spider-website/equipe" element={<Agent />} />
            <Route path="spider-website/blog" element={<Blog />} />
            <Route path="spider-website/galerie" element={<Galerie />} />
            <Route path="spider-website/contact" element={<Contact />} />
            <Route path="spider-website/spider-detail" element={<SpiderDetail />} />
            <Route path="spider-website/product-detail" element={<ProductDetail />} />
            <Route path="spider-website/spider-galerie-detail" element={<GalerieDetail />} />
            <Route path="spider-website/actualite" element={<Actualite />} />
            <Route path="spider-website/mise-a-jour-anterieur" element={<SpiderMiseAJour />} />
            <Route path="spider-website/*" element={<ErrorPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>

    </>



  );
}

export default App;