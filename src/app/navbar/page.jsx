import React from 'react';
import dynamic from "next/dynamic";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-100 bg-opacity-50  px-6" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                   <img src="https://i.ibb.co/cXN6zFH/Bike-Book-logo.png" className='h-10' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-indigo-700 text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default dynamic (() => Promise.resolve(Navbar), {ssr: false});