import React from 'react';
import Layout from '../Layout/Layout';
import { useState, useEffect } from 'react';

const TeamPage = () => {
     const [team, setTeam] = useState([]);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('./database/teamMember.json');
                    const data = await response.json();
                    setTeam(data.team);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };
          fetchData();
     },
  []);
     return (
          <div className='bg-slate-100 antialiased'>
               <Layout>
                    <div className="bg-slate-100 py-8">
                         <div className='container m-auto p-4 my-8'>
                              <h1 className='text-6xl font-semibold my-6'>Team</h1>
                              <div className='flex'>
                                   <p className='text-lg font-semibold'>Home</p>
                                   <img src="src/assets/arrow2.png" alt="" className='px-3 h-3 mt-3' />
                                   <p className='text-lg font-semibold text-green-600 '>Team</p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white">
                         <div className="container m-auto p-4">
                              <p className='text-lg text-green-500 font-semibold uppercase my-4'>Our Team Member</p>
                              <p className='text-4xl my-4 font-bold py-4'>Check our awesome team <br /> members</p>
                         </div>
                         <div className='py-8'>
                              <div className="container mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                                   {team.map(item => (
                                        <div key={item.id} className=''>
                                             <div className="card bg-base-100 shadow-sm border-b-2 border-gray-300">
                                                  <img className='' src={item.image} alt="Devon" />
                                                  <div className="card-body">
                                                       <h1 className="text-4xl font-poppins font-bold text-center">
                                                            {item.name}
                                                       </h1>
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

export default TeamPage;