import React from 'react'
import { SERVER_BASE_URL } from '../helpers/apiClient';
import Slider from 'react-slick';


function AppImageSlide({ data, options }: any) {
    return (
        <div className="container ">
            <div className="testimonial-itm ">         
                <Slider className='owl-eme'  {...options} >
                    {data.map((item: any, index: number) => (
                        <div key={index} className="d-flex align-items-center bg-transparent p-2 rounded text-white ">
                            <img className="img-fluid flex-shrink-0 " alt={"App image "}
                                src={`${SERVER_BASE_URL}/appImage/${item}`}
                                  />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default AppImageSlide