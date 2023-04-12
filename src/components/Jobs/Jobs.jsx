import React from 'react';
import { getShoppingCart } from '../Utilities/ConnectPage';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const dbJobs = useLoaderData()
    
    return (
        <div>
            <h2>ThIS IS JOBS PAGE{dbJobs.length}</h2>
        </div>
    );
};

export default Jobs;