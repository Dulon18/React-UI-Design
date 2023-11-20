import React from 'react';
import Layout from '../Layout/Layout';
import { useState, useEffect } from 'react';

const ProjectPage = () => {
     const [projects, setProject] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('./database/project.json');
                    const data = await response.json();
                    setProject(data.project);
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
                              <h1 className='text-6xl font-semibold my-6'>All Projects</h1>
                              <div className='flex'>
                                   <p className='text-lg font-semibold'>Home</p>
                                   <img src="src/assets/arrow2.png" alt="" className='px-3 h-3 mt-3' />
                                   <p className='text-lg font-semibold text-green-600 '>Projects</p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white">
                         <div className="container m-auto p-4">
                              <p className='text-xl text-green-500 font-semibold uppercase py-6 mt-6'>All Project</p>
                              <p className='text-4xl my-4 font-bold'>Better Agency/SEO Solution<br /> At Your Fingertips  </p>
                         </div>
                         <div className="container mx-auto p-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
                              {projects.map(item => (
                                   <div key={item}>
                                        <div className="card bg-base-100 shadow-lg">
                                             <div className="card-body">
                                                  <img src={item.image} alt="" />
                                                  <div className='font-poppins'>
                                                       <h1 className='text-2xl font-bold py-3 uppercase'>{ item.title}</h1>
                                                  </div>
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

export default ProjectPage;