import React from 'react'
// @ts-ignore
import WOW from 'wowjs';

function Contact() {


    React.useEffect(() => {
        const wow = new WOW.WOW({
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }, [])
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            {/* @ts-ignore */}
                                            <label for="name">Votre Nom</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Your Email" />
                                            {/* @ts-ignore */}
                                            <label for="email">Votre Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            {/* @ts-ignore */}
                                            <label for="subject">Sujet</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here"
                                                id="message" style={{ height: "260px" }}>

                                            </textarea>
                                            {/* @ts-ignore */}
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="send-buttons  w-100 py-3" type="submit">Envoyez le message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact