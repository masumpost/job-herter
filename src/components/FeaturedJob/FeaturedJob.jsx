import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const FeaturedJob = () => {
    const[features, setFeatures] = useState([])
    useEffect(()=>{
        fetch('featuredJob.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data));
    },[])
    return (
        <div>
            <div className='text-center'>
          <h1 className='font-bold text-4xl my-6'>Featured Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>     
        </div>
        <div className='grid md:grid-cols-2 gap-4 rounded my-12'>
            {
                features.map(feature=><Feature
                key={feature.id}
                feature={feature}
                ></Feature>)
            }
        </div>
        </div>
    );
};

export default FeaturedJob; 