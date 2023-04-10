import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex items-center md:justify-between mt-4 md:mt-8 px-4 bg-green-50'>
            <div className='md:w-[500px] md:h-[450px]'>
                <h1 className='font-bold text-4xl md:text-7xl leading-3 mb-2 md:mb-3'>One Step Closer To Your <span className='text-gray-400'>Dream Job</span></h1>
                <p className='my-2 md:my-5 text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-active btn-accent text-white">Get Started</button>
            </div>
            <div>
                <img className='w-[616px] h-[544px]' src="banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;