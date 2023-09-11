import React from 'react';
import { FaEnvelope,FaGlobe,FaPhoneSquareAlt,FaTelegramPlane,FaFacebookSquare,FaWhatsappSquare,FaSearchLocation } from "react-icons/fa";
const Contact = () => {
    return (
        <div className='w-full mx-auto px-10 rounded-xl'>
            <h2 className='text-center mt-10 text-3xl font-bold mb-10 relative'>Contact Us</h2>

            <div className='flex'>
                <div className='w-1/2 bg-gradient-to-r from-cyan-600 to-indigo-800 text-white rounded'>
                    <h2 className='text-4xl font-bold text-center mt-11'>Contact With Us</h2>

                    <div className='text-center mt-6'>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaEnvelope/> <p className='text-xl'>  bikebook@gmail.com</p></div>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaGlobe/> <p className='text-xl'> www.bikebook.com</p></div>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaTelegramPlane/> <p className='text-xl'>+8801886807417</p></div>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaPhoneSquareAlt/> <p className='text-xl'>  +8868654664556</p></div>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaFacebookSquare/> <p className='text-xl'> facebook.com/bikebook</p></div>
                   <div className='flex  items-center ml-60 mt-2 gap-2'> <FaWhatsappSquare/> <p className='text-xl'>+6235473647375</p></div>
                   <div className='flex justify-between items-center mt-2 gap-2'>  <p className='text-xl px-4'>shop no 452,road-20Johurul Islam City,Aftabnagar,Badda, Dhaka (Near the east west university)</p></div>
                    </div>
                </div>

                <div className='w-1/2 bg-slate-100'>
                    <h2 className='text-4xl font-bold text-center mt-11'>Send Message to us</h2>
                    <div className='px-5'>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text"  placeholder="Your Message" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;