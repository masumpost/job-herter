import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

const Feature = ({feature}) => {
    const{id,companyLogo, jobTitle, companyName, workingTine,remoteOrOnsite,
        location,salary
} = feature
console.log(id)
    return (
        <div className='bg-slate-50 p-10'>
            <img className='w-28 h-10' src={companyLogo} alt="" />
            <h4 className='font-semibold text-2xl my-3'>{jobTitle}</h4>
            <h5 className='text-2xl font-bold'>{companyName}</h5>
            <p className='my-3'><button className="btn btn-outline mr-2">{remoteOrOnsite}</button> <button className="btn btn-outline">{workingTine}</button></p>

            <p className='my-3'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{location}  <FontAwesomeIcon className='mr-2' icon={faDollarSign} />{salary}</p>

            <div>
            <button className="btn btn-success text-white">View Details</button>
            </div>
        </div>
    );
};

export default Feature;