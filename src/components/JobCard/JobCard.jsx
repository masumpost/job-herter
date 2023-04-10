import React from 'react';

const JobCard = ({cards}) => {
    const {image, title, available} = cards
    return (
        <div className=' bg-slate-100 p-10 rounded my-3'>
            <img className='my-2' src={image} alt="" />
            <h5 className='text-2xl font-semibold'>{title}</h5>
            <p>{available}</p>
        </div>
    );
};

export default JobCard;