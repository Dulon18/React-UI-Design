import React from 'react';
import Layout from "../Layout/Layout.jsx";
import { useState, useEffect } from 'react';

const HomePage = () => {
     const [workList,setWorkList] = useState([]);
     const [counterList,setCounters] = useState([]);
     // const [setFeature] = useState([]);


     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('/database/workList.json');
                    const data = await response.json();
                    setWorkList(data.workList);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };
          fetchData();
     },
          []);

     useEffect(() => {
          const fetchCounterData = async () => {
               try {
                    const response = await fetch('/database/counter.json');
                    const data = await response.json();
                    setCounters(data.counter);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };
          fetchCounterData();
     }, []);

     // useEffect(() => {
     //      const fetchFeatureData = async () => {
     //           try {
     //                const response = await fetch('/database/featureProduct.json');
     //                const data = await response.json();
     //                setFeature(data.counter);
     //           } catch (error) {
     //                console.error('Error fetching data:', error);
     //           }
     //      };
     //      fetchFeatureData();
     // },[])

     return (
          <div style={{ background: '#D7F5DC' }}>
               <Layout>
                    {/* hero section start */}
                    <div style={{ background: '#D7F5DC', height: '680px' }}>
                         <div className="container mx-auto p-4">
                              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                                   <div className='text-start py-20'>
                                        <h1 className=" font-poppins text-5xl font-bold text-black capitalize">Increase Your <br /> Customers Loyalty <br /> and Satisfaction</h1>
                                        <p className=" font-Avenir py-6 text-xl text-black">We help businesses like yours earn more customers, <br /> standout from competitors, make more money</p>
                                        <button className="btn btn-success text-lg font-bold text-white">Get Started</button>
                                   </div>
                                   <div className='grid justify-items-end flex-col py-4'>
                                        <div className='flex lg:flex-row mb-6'>
                                             <img src="/img/Rectangle 1241.png" className=" w-auto rounded-lg shadow-2xl mx-5" />
                                             <img src="/img/Rectangle 1242.png" className=" rounded-lg shadow-2xl" />
                                        </div>
                                        <div className='flex flex-row'>
                                             <img src="/img/Rectangle 1243.png" className=" rounded-lg shadow-2xl mx-5" />
                                             <img src="/img/Rectangle 1244.png" className=" rounded-lg shadow-2xl" />
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* our patner */}
                         <div className='bg-white h-28 p-5'>
                              <div className='container mx-auto p-4 flex gap-32'>
                                   <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2' >
                                        <div className='px-20 py-4'><img src="/img/logos_google.png" /></div>
                                        <div className='px-20 py-4'><img src="/img/Trello-logo-blue 1.png" /></div>
                                        <div className='px-20 py-4'><img src="/img/logos_monday.png" /></div>
                                        <div className='px-20 py-4'><img src="/img/Notion.png" /></div>
                                        <div className='px-20 py-4'><img src="/img/Slack.png" /></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* hero section end */}

                    {/* work section stat */}
                    <div className='bg-white'>
                         <div className="container mx-auto p-4 ">
                              <div className='py-3'>
                                   <p className='uppercase text-xl text-success mt-8 py-3'>Work List</p>
                                   <p className='text-3xl font-poppins  font-bold mt-4'>We provide the Perfect Solution<br></br> to your business growth</p>
                              </div>
                              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 gap-14 py-7'>
                                   {workList.map(list => (
                                        <div key={list.id} className="group p-6 hover:h-158 hover:bg-white hover:shadow-2xl hover:rounded-2xl p-5">
                                             <div className="p-4 h-auto">
                                                  <img src="{list.image}" alt="" />
                                                  <h1 className="text-3xl font-bold my-5 font-poppins">{list.title}</h1>
                                                  <p className='text-lg font-Avenir my-5'>{list.description}</p>
                                                  <button className="mt-5 capitalize group-hover:bg-orange-600 group-hover:rounded-xl group-hover:text-white group-hover:p-3 text-lg font-Avenir flex">Learn More
                                                       <img className='mx-4 h-5 mt-1 group-hover:white' src="src/assets/arrow.png" alt="" />
                                                  </button>
                                             </div>
                                        </div>
                                   ))}

                              </div>
                         </div>
                         <div className="container mx-auto py-6">
                              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-20 gap-1 md:gap-4'>
                                   {counterList.map(item => (
                                   <div key={item.id} className='py-8'>
                                        <div className="card w-80 bg-base-100 shadow-xl">
                                             <figure className="px-10 pt-10 ">
                                                  <img src={item.image} alt="group" className="rounded-xl bg-green-100 p-7" />
                                             </figure>
                                             <div className="card-body items-center text-center">
                                                       <h2 className="text-3xl text-black font-bold font-poppins">{item.count_value}</h2>
                                                       <p className='text-black text-base font-poppins font-semibold'>{item.objectName}</p>
                                             </div>
                                        </div>
                                   </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                    {/* work section end */}
                    {/* featured project start */}
                    <div className='bg-green-100'>
                         <div className='container m-auto p-4 leading-7'>
                              <h1 className='text-xl font-semibold text-success uppercase py-5'>Featured Project</h1>
                              <p className='text-3xl font-bold py-5 capitalize'>We provide the Perfect Solution <br /> to your business growth</p>
                         </div>
                         <div className='container m-auto p-4 flex gap-12'>
                              <div className="grid-col-6">
                                   <img src="/img/Mask1.png" alt="" />
                                   <div className='py-4'>
                                        <p className='text-base text-gray-400 font-semibold'>App Design - June 20, 2022</p>
                                        <p className='text-2xl font-bold py-3'>App Redesign</p>
                                   </div>
                              </div>
                              <div className="flex flex-row gap-5">
                                   <div className="flex flex-col">
                                        <div className="basis-1/4 flex-wrap">
                                             <img src="/img/Mask.png" alt="" />
                                             <div className='py-5'>
                                                  <p className='text-base text-gray-400 font-semibold'>App Design - June 20, 2022</p>
                                                  <p className='text-xl font-bold py-3'>Redesign channel website landng page</p>
                                             </div>
                                        </div>
                                        <div className="basis-1/4 flex-wrap">
                                             <img src="/img/Mask4.png" alt="" />
                                             <div className='py-5'>
                                                  <p className='text-base text-gray-400 font-semibold'>App Design - June 20, 2022</p>
                                                  <p className='text-xl font-bold py-3'>Redesign channel website landng page</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='flex flex-col'>
                                        <div className="basis-1/4 flex-wrap">
                                             <img src="/img/Mask2.png" alt="" />
                                             <div className='py-5'>
                                                  <p className='text-base text-gray-400 font-semibold'>App Design - June 20, 2022</p>
                                                  <p className='text-xl font-bold py-3 '>Redesign channel website landng page</p>
                                             </div>
                                        </div>
                                        <div className="basis-1/4 flex-wrap">
                                             <img src="/img/Mask3.png" alt="" />
                                             <div className='py-5'>
                                                  <p className='text-base text-gray-400 font-semibold'>App Design - June 20, 2022</p>
                                                  <p className='text-xl font-bold py-3'>Redesign channel website landng page</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* featured project end */}
               </Layout>
          </div>

     );
};

export default HomePage;