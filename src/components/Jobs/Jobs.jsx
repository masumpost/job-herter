import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../Utilities/ConnectPage';
import { useLoaderData } from 'react-router-dom';
import SingleJobs from '../SingleJobs/SingleJobs';

const Jobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('job'));

  if (!appliedJobs) {
    return (
      <div className="text-center">
        <Header />
        <h3 className='text-red-800'>No Job Applied, Thank You</h3>
        <Footer />
      </div>
    );
  }
    return (
        <div className=''>
         {appliedJobs.map((singleJob) => (
            <SingleJobs key={singleJob.id} singleJob={singleJob}></SingleJobs>
          ))}
        </div>
    );
};

export default Jobs;