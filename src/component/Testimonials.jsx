import React from 'react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
     const [setWorkList] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('/testimonial.json');
                    const data = await response.json();
                    setWorkList(data.testimonial);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };
          fetchData();
     },

     []);

     return (
          <div>

          </div>
     );
};

export default Testimonials;