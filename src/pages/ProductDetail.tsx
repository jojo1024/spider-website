
import { useSelector } from 'react-redux';
import AppImageSlide from '../components/AppImageSlide';
import DataNotFound from './DataNotFound';
import ErrorPage from './ErrorPage';
import { IReduxState } from '../store';
import { SERVER_BASE_URL } from '../helpers/apiClient';



function ProductDetail() {

    const { allSpiderApp } = useSelector((state: IReduxState) => state.spiderApp);
    // Lorsqu'on clique sur un produit de spider on passe son id en paramètre pui on le récupère sur cette page pour faire le filtre
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const numberId = Number(id)
    // On récupère que les éléments de l'app en fonction de l'id donné
    const filterData = allSpiderApp.filter((objet: any) => objet.idApp === numberId);
    // On récupère que les captures d'écrans de l'application
    const appImages = filterData.map((item: any) => item.libAppImage)

    if (isNaN(numberId)) {
        return (<ErrorPage />)
    }

    if (filterData.length === 0) {
        return (<DataNotFound />)
    }

    const options = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        delay: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12 product-detail  " >
                        {filterData?.length && <>
                            <div className=" position-relative mb-4  pb-2  " style={{ paddingLeft: "15px" }}>
                                {/* <h6 className="text-green position-relative ps-4">A Propos De Nous</h6> */}
                                <div className='mt-5  ' style={{ display: "flex", flexDirection: "row", }}>
                                    <img src={`${SERVER_BASE_URL}/appImage/${filterData[0]?.logoApp}`} style={{ width: "50px", borderRadius: "20px", marginRight: "10px" }} alt='Logo focus école' />
                                    <h2 className='pt-1'>{filterData[0]?.libApp}</h2>
                                </div>
                            </div>
                            <div className="wow fadeInUp " data-wow-delay="0.1s" style={{ padding: "20px" }}>
                                {/* {
                                    JSON.parse(filterData[0].paragrapheListe).map((x: string, index: number) => (
                                        <p key={index}>{x}</p>
                                    ))
                                } */}
                                <div dangerouslySetInnerHTML={{ __html: filterData[0]?.texteComplet.replace(/\n/g, '<br>') }}></div>

                                <div className='mt-4'>
                                    {JSON.parse(filterData[0]?.checkListe).map((item: any, index: number) => (
                                        <div key={index} >
                                            <p className=" position-relative ps-4">
                                                <i className="fa fa-check  me-2 text-green"></i>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="container-xxl  testimonial py-3 my-2 wow fadeInUp"
                                    data-wow-delay="0.1s">
                                    <AppImageSlide data={appImages} options={options} />
                                </div>

                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail