import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex items-center md:justify-between mt-4 md:mt-8 mx-4'>
            <div>
                <h1 className='font-bold text-3xl md:text-8xl leading-3 mb-3'>One Step <br /> Closer To Your <br /> <span className='text-gray-400'>Dream Job</span></h1>
                <p className='my-2 md:my-5 text-2xl'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn btn-active btn-accent text-white">Get Started</button>
            </div>
            <div>
                <img src="banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;