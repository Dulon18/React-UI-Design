import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({children}) => {
     return (
          <div>
               {/* navbar */}
               <div className='container mx-auto p-4 font-poppins '>
                    <div className="navbar bg-transparent">
                         <div className="navbar-start">
                              <a className="text-xl font-bold">Design<span style={{ color: '#F55F1D' }}>AGENCY</span></a>
                         </div>
                         <div className="navbar-end hidden lg:flex text-black">
                              <ul className="menu menu-horizontal  font-bold lg:gap-4 md:gap-1 sm:gap-0">
                                   <li className='text-base hover:rounded'><NavLink className={({ isActive }) => isActive ? 'bg-green-500 rounded  text-white font-bold' : ''} to="/">Home</NavLink></li>
                                   <li className='text-base hover:rounded'><NavLink className={({ isActive }) => isActive ? 'bg-green-500 rounded  text-white font-bold' : ''} to="/team">Team</NavLink></li>
                                   <li className='text-base hover:rounded'><NavLink className={({ isActive }) => isActive ? 'bg-green-500 rounded  text-white font-bold' : ''} to="/service">Service</NavLink></li>
                                   <li className='text-base hover:rounded'><NavLink className={({ isActive }) => isActive ? 'bg-green-500 rounded  text-white font-bold' : ''} to="/project">Projects</NavLink></li>
                                   <li className='text-base hover:rounded'><NavLink className={({ isActive }) => isActive ? 'bg-green-500 rounded  text-white font-bold' : ''} to="/testimonial">Testimonials</NavLink></li>
                              </ul>
                              <a className="btn btn-outline text-black btn-success mx-2">Login</a>
                              <a className="btn text-white btn-success">Register</a>
                         </div>
                    </div>
               </div>
               { children }
               {/* subscribe part*/}
               <div className='bg-white p-20'>
                    <div className='text-center gap-4 my-5'>
                         <p className='font-Avenir text-lg text-success mb-4 uppercase '>Subscribe</p>
                         <h1 className='text-4xl font-poppins font-bold mb-4 capitalize '>
                              Subscribe to get the latest<br /> news about us
                         </h1>
                         <p className='text-base text-gray-400 mb-4'>
                              Please drop your email below to get daily updates about what we do
                         </p>
                         <div className="flex items-center justify-center">
                              <div className="relative w-full max-w-lg">
                                   <input
                                        type="text"
                                        placeholder="Enter Your Email Address"
                                        className="input input-bordered w-full pr-12 h-18 p-7"
                                   />
                                   <button className="btn r absolute top-0 right-0 h-full text-lg" style={{ background: '#F55F1D',color:'#fff',}}>Subscribe</button>
                              </div>
                         </div>
                    </div>
               </div>
               <footer className="footer p-10 bg-black text-white">
                    <div className="container mx-auto p-4 font-poppins flex flex-wrap justify-between">
                         <div className="flex flex-col me-8 w-full lg:w-1/4">
                              <h1 className="text-3xl font-bold text-white mb-4">WEB LOGO</h1>
                              <p className="mt-3 text-lg font-Avenir">
                                 Some footer text about the Agency. Just a little description to help people understand you better.
                              </p>
                              <div className="flex mt-4">
                                   <img className='bg-green-600 p-2  rounded-full' src="src/assets/fb.png" alt="" />
                                   <img className='bg-green-600 p-2  rounded-full mx-3' src="src/assets/twitter.png" alt="" />
                                   <img className='bg-green-600 p-2  rounded-full' src="src/assets/linkedin.png" alt="" />
                                   <img className='bg-green-600 p-2  rounded-full mx-3' src="src/assets/insta.png" alt="" />

                              </div>
                              <h3 className='text-lg font-Avenir mt-5'>Copyright Design Agency 2022</h3>
                         </div>

                         <nav className="flex flex-col me-8 w-full lg:w-1/4">
                              <h2 className="font-bold text-white mb-4 text-lg">Quick Links</h2>
                              <a className="mt-2  text-base text-white">Service</a>
                              <a className="mt-4  text-base text-white">Portfolio</a>
                              <a className="mt-4  text-base text-white">About Us</a>
                              <a className="mt-4  text-base text-white">Contact Us</a>
                         </nav>

                         <div className="w-full lg:w-1/4">
                              <h2 className="text-white text-base font-bold mb-4">Address</h2>
                              <p className="text-white text-base font-Avenir">
                                   Design Agency Head Office.
                              </p>
                              <p className="text-white text-base font-Avenir"> Airport Road</p>
                              <p className="text-white text-base font-Avenir">United Arab Emirates</p>
                         </div>
                    </div>
               </footer>

          </div>
     );
};

export default Layout;