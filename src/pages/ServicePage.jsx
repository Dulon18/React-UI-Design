import React from 'react';
import Layout from '../Layout/Layout';
import { useState, useEffect } from 'react';

const ServicePage = () => {
     const [services,setService] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('./database/services.json');
                    const data = await response.json();
                    setService(data.services);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };
          fetchData();
     },
          []);
     return (
          <div className='bg-slate-100'>
               <Layout>
                    <div className="bg-slate-100 py-8">
                         <div className='container m-auto p-4 my-8'>
                              <h1 className='text-6xl font-semibold my-6'>Our Services</h1>
                              <div className='flex'>
                                   <p className='text-lg font-semibold'>Home</p>
                                   <img src="src/assets/arrow2.png" alt="" className='px-3 h-3 mt-3' />
                                   <p className='text-lg font-semibold text-green-600 '>Services</p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white">
                         <div className="container m-auto p-4">
                              <p className='text-xl text-green-500 font-semibold uppercase py-6'>Our All Services</p>
                              <p className='text-4xl my-4 font-bold'>We Provide BestWeb design  <br /> services</p>
                         </div>
                         <div className='py-8'>
                              <div className="container mx-auto p-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
                                   {services.map(item => (
                                        <div key={item.id}>
                                             <div className="card bg-base-100 shadow-lg">
                                                  <div className="card-body">
                                                       <div className='font-poppins'>
                                                            <h1 className='text-3xl font-bold py-3 uppercase'>{item.title}</h1>
                                                            <p className='text-xl py-3 text-slate-400'>{ item.description}</p>
                                                       </div>
                                                       <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                                                            {item.cardImage.map((image, index) => (
                                                                 <div key={index}>
                                                                      <img className='' src={image} alt="" />
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </Layout>
          </div>
     );
};

export default ServicePage;