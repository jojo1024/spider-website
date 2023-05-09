import React from 'react'
import { Link } from 'react-router-dom';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollToTop } from '../store/appSlice';
import { IReduxState } from '../store';

export interface IProduit {
    id?: number;
    title: string;
    description: string;
    icon: string;
    loading: boolean;
}

const Produits: React.FC<IProduit> = (props) => {
    const dispatch = useDispatch();
    const { scrollToTop } = useSelector((state: IReduxState) => state.application);
    const { title, description, icon, id, loading } = props
    return (

        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  {  loading ?
                  <Skeleton
                        circle
                        height="100px"
                    />
                    :
                    <img alt={`Logo ${icon}`}
                        src={`${SERVER_BASE_URL}/appImage/${icon}`}
                        style={{ width: "50px", borderRadius: "20px" }}
                    />}
                </div>
                <h5 className="mb-3">{loading ? <Skeleton width={90} /> : title}</h5>
                {loading ? <Skeleton count={3} /> : <p>{description}</p>}
                <Link onClick={() => dispatch(setScrollToTop(!scrollToTop))} className="btn px-3 mt-auto mx-auto" to={`/product-detail?id=${id}`} >{ loading ? <Skeleton width={100} /> : "Voir plus"}</Link>
            </div>
        </div>
    )
}


export default Produits