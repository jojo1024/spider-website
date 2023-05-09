import { useSelector } from 'react-redux';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { IReduxState } from '../store';
import Skeleton from 'react-loading-skeleton';
import { IAgent } from '../store/agentSlice';
import Slider from 'react-slick';

function TeamMembers() {

    const { allAgent, loadingAgent } = useSelector((state: IReduxState) => state.agent);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        autoplaySpeed: 7000, // interval de 6 secondes entre chaque slide
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
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-green ps-4">Notre équipe</h6>
                    <h2 className="mt-2">Rencontrez quelques membres</h2>
                </div>
                <div className="row g-4">
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
                            <Slider className='owl-eme '  {...settings} >
                                {allAgent?.slice(0, 7).map((item: IAgent, index: number) => (
                                    <div key={index} className="col-lg-3 col-md-6 wow fadeInUp p-2" data-wow-delay="0.2s">
                                        <div className="rounded shadow overflow-hidden">
                                            <div className="position-relative">

                                                <img className="img-fluid" src={`${SERVER_BASE_URL}/equipeImages/${item?.photoAgent}`} alt="" />

                                                <div
                                                    className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                </div>
                                            </div>
                                            <div className="text-center p-4 mt-3" style={{ height: "120px" }}>
                                                <h5 className="fw-bold mb-0 truncate">{item?.nomAgent}</h5>
                                                <small>{item?.fonctionAgent}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                    }

                </div>
            </div>
        </div>
    )
}

export default TeamMembers