import React from 'react';
import './Subscription.css';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {AiOutlineRight} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { FaBeer } from 'react-icons/fa';
const Subscription = () => {
    return (
        <div className='container-full bg-dark text-light'>
            <div className="container subscription py-4">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-6 col-lg-4">
                       <div className="news-content d-flex align-items-center">
                       <div className="news-icon">
                            <MdOutlineMarkEmailRead className='icon'/>
                        </div>
                        <div className="news-content">
                            <h4>Fear of missing <br />out?</h4>
                            <p>Get the latest deals, <br />updates & more</p>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-6 col-lg-4 content" >
                        <div className="email-content  d-flex">
                           <input type="text" placeholder='your email address'/>
                           <button className=''>Subscribe <AiOutlineRight className='subs-icon'/></button>
                        </div>
                       
                    </div>
                    <div className=" col-md-6 col-lg-4 content">
                        <div className="social-icons">
                            <p>Follows us</p>
                            <ul>
                                <li><Link to=""><BsFacebook/></Link></li>
                                <li><Link to=""><FaTwitterSquare/></Link></li>
                                <li><Link to=""><FaInstagramSquare/></Link></li>
                                <li><Link to=""><FaPinterestSquare/></Link></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;