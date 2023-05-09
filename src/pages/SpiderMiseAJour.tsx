import { useSelector } from 'react-redux';
import { IReduxState } from '../store';
import { SERVER_BASE_URL } from '../helpers/apiClient';
import { ISpiderVersion } from '../store/spiderVersionSlice';
import { handleDownload } from '../helpers/functions';

function SpiderMiseAJour() {

    const { allSpiderVersions } = useSelector((state: IReduxState) => state.spiderVersion);
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mt-2">Les mises à jour antérieures de Spider</h2>
                </div>
                <div className="row g-4">
                    {
                        allSpiderVersions.length &&
                        allSpiderVersions.map((item: ISpiderVersion, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" >
                                <div className=" shadow rounded px-2 h-100  mb-5 pb-2 pt-4 " >
                                    <div className='text-center'>
                                        <h6 className=" d-inline text-black  " style={{ paddingBottom: "10px" }}>
                                            {
                                                `Spider : version ${item?.versionNumber} | Date ${item?.versionDate}`
                                            }
                                        </h6>
                                        <div>
                                            {
                                                <div
                                                    className="cont btn bt text-light rounded py-2 px-4 mt-4 mb-2 "
                                                    onClick={() => handleDownload(`${SERVER_BASE_URL}/downloadSpider/${item?.versionFileLocation}`, `${item?.versionFileLocation}`)}
                                                >
                                                    Téléchargez <i className="fa fa-download px-2" ></i>
                                                </div>
                                            }
                                        </div>                                       
                                        <div className=" text-center mb-1 pb-2 ">
                                            <h6 className="mt-2">Nouvautés de la mise à jour</h6>
                                        </div>
                                    </div>                               
                                    <div>
                                        {
                                            JSON.parse(item.VersionDescriptionArray).map((x: string, index: number) => (
                                                <p key={index} className=" position-relative ps-4  ">
                                                    <i className="fa fa-check   text-green" ></i>&nbsp;
                                                    {x}
                                                </p>
                                            ))

                                        }
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

export default SpiderMiseAJour