import React from 'react';
import Layout from '../Layout/Layout';
import { useState, useEffect } from 'react';


const TestimonialPage = () => {
     const [testimonial, setTestimonial] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('./database/testimonial.json');
                    const data = await response.json();
                    setTestimonial(data.testimonial);
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
                              <h1 className='text-4xl font-semibold my-6'>Testimonial List</h1>
                              <div className='flex'>
                                   <p className='text-base font-semibold'>Home</p>
                                   <img src="src/assets/arrow2.png" alt="" className='px-3 h-2 mt-3' />
                                   <p className='text-base font-semibold text-green-600 '>Testimonial List</p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white">
                         <div className="container m-auto p-4">
                              <p className='text-xl text-green-500 font-semibold uppercase py-6 mt-6'>Testimonial List</p>
                              <p className='text-4xl my-4 font-bold'>Better Agency/SEO Solution  At <br />Your Fingertips  </p>
                         </div>
                         <div className="container mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                              {testimonial.map(item => (
                                   <div key={item.id} className="card bg-base-100 shadow-lg">
                                        <div className="card-body items-center text-center">
                                             <img className='h-28 w-28' src={item.image} alt="" />
                                             <div className='font-poppins'>
                                                  <p className='text-lg py-3 text-slate-400'>
                                                       {item.description}</p>
                                                  <h1 className='text-lg font-bold py-3 uppercase'> {item.name}</h1>
                                                  <h4 className='text-base font-medium py-1'> {item.occupation}</h4>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </Layout>
          </div>
     );
};

export default TestimonialPage;