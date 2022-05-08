import React from 'react';
import './SpecialOffer.css';
import img1 from '../../asset/specialOffer/img1.jpg'
import img2 from '../../asset/specialOffer/img2.jpg'
import img4 from '../../asset/specialOffer/img4.jpg'
import img3 from '../../asset/specialOffer/img3.jpg'
import img5 from '../../asset/specialOffer/img5.jpg'
import img6 from '../../asset/specialOffer/img6.jpg'
import img7 from '../../asset/specialOffer/img7.jpg'
const SpecialOffer = () => {
    return (
        <div className='container my-5 '>
            <div className="row">
                <div className="col-md-6 col-12 special-offer">
                    <div className="offer-title d-flex justify-content-between align-items-center">
                        <h2>Special Offer</h2>
                        <div className="circle">
                            <p>save</p>
                            <span> $120</span>
                        </div>
                    </div>
                    <div className="offer-content text-center">
                    <img src={img1} alt="" />
                    <h4>Game Console Controller <br />
                    +USB 3.0 Cable</h4>
                    <p> <span className='line-through'>$ 900</span>$ 790</p>
                    </div>
                   
                    <div className="offer-footer d-flex justify-content-between">
                        <p>Available : <span>6</span> </p>
                        <p>Already Sold : <span>28</span></p>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="featured-title d-flex justify-content-around">
                    <h3 className='rated'>Top Rated</h3>
                        <h3>On Sale</h3>
                        <h3>Top Viewed</h3>
                    </div>
                    <hr />
                    <div className="featured-content">
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <div className="card shadow mb-4 mt-2">
                                    <h5>
                                        Wireless Audio Recorder
                                    </h5>
                                    <img src={img2} alt="" />
                                    <p>$ 685</p>
                        
                                </div>
                                <div className="card shadow">
                                    <h5>
                                        Smartphone 6s 32gb LTE
                                    </h5>
                                    <img src={img4} alt="" />
                                    <p>$ 685</p>
                        
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="card shadow mb-4 mt-2">
                                    <h5>
                                        Tablet White EliteBook...
                                    </h5>
                                    <img src={img3} alt="" />
                                    <p>$ 1944</p>
                        
                                </div>
                                <div className="card shadow">
                                    <h5>
                                        Widescreen NX Mini F...
                                    </h5>
                                    <img src={img5} alt="" />
                                    <p>$ 595</p>
                        
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="card shadow mb-4 mt-2">
                                    <h5>
                                        Purple Solo Wireless
                                    </h5>
                                    <img src={img6} alt="" />
                                    <p>$ 323</p>
                        
                                </div>
                                <div className="card shadow">
                                    <h5>
                                        Full color LaserJet p...
                                    </h5>
                                    <img src={img7} alt="" />
                                    <p>$ 333</p>
                        
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
    );
};

export default SpecialOffer;