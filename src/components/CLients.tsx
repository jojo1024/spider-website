import colors from '../helpers/colors'
import  { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_BASE_URL, apiClient } from '../helpers/apiClient';
import { IEtablissement, setAllEtablissement } from '../store/etablissementSlice';
import { IReduxState } from '../store';
import Slider from 'react-slick';


function CLients() {

    const dispatch = useDispatch();
    const { allEtablissement } = useSelector((state: IReduxState) => state.etablissement);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
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

    const recupEtablissement = useCallback(async () => {
        try {
            const res: any = await apiClient.get(
                SERVER_BASE_URL,
                "/recupetablissement"
            );
            if (res.status === 1) {
                dispatch(setAllEtablissement(res.data))
            }
        } catch (error) {
        } finally {
        }
    }, []);

    useEffect(() => {
        recupEtablissement();
    }, [])

  
    return (
        <div>

            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="position-relative d-inline text-green ps-4">Nos clients</h6>
                <h2 className="mt-2">Ils nous font confiance</h2>
            </div>
            <div className="container-xxl  testimonial py-3 my-5 wow fadeInUp" style={{ backgroundColor: colors.primary }}
                data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="testimonial-itm gap-4">
                        <Slider className='owl-eme '  {...settings} >
                            {allEtablissement?.map((item: IEtablissement, index: number) => (
                                <div key={index}  className="d-flex align-items-center bg-transparent  rounded text-white  p-4" style={{margin:1}}>
                                    <img className="img-fluid flex-shrink-0 rounded-circle" alt={"Logo " + item.libEtab}
                                        src={`${SERVER_BASE_URL}/etabLogoImage/${item?.libImageEtab}`}
                                        style={{ width: "50px", height: "50px" }} />
                                    <div className="ps-3">
                                        <h6 className="text-white mt-1 ">{item.libEtab}</h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CLients
