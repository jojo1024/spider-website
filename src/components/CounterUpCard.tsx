import  {  useState } from 'react'
import colors from '../helpers/colors'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
function CounterUpCard() {

    const [counterOn, setCounterOn] = useState(false)

    return (
        // @ts-ignore
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="container-xxl  newsletter my-5 wow fadeInUp" style={{ backgroundColor: colors.primary }}
                data-wow-delay="0.1s">
                <div className="container px-lg-5">
                    <div className="row align-items-center" style={{ padding: "20px" }}>
                        <div className="col-12 col-md-4">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="fa fa-users-cog fa-2x  mb-2" style={{ color: colors.white }}></i>
                                    <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                        {/* 56 */}
                                        {counterOn &&
                                            <CountUp start={0} end={56} duration={15} delay={0} />
                                        }
                                    </h2>
                                    <p className="mb-0" style={{ color: colors.white }}>Employés</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="fa fa-school fa-2x  mb-2" style={{ color: colors.white }}></i>
                                    <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                        {counterOn &&
                                            <CountUp start={0} end={800} duration={10} delay={0} />
                                        }
                                    </h2>
                                    <p className="mb-0" style={{ color: colors.white }}>Etablissements scolaires</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="fa fa-check-circle fa-2x  mb-2" style={{ color: colors.white }}></i>
                                    <h2 className="mb-1" data-toggle="counter-up" style={{ color: colors.white }}>
                                        {counterOn &&
                                            <CountUp start={0} end={11} duration={15} delay={0} />
                                        }
                                    </h2>
                                    <p className="mb-0" style={{ color: colors.white }}>Années d'expérience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default CounterUpCard