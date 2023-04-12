import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Details = () => {
    const cardDetails = useLoaderData();
    const {id} = useParams();
    const[job, setJob] = useState({});
    useEffect(()=>{
        const jobData = cardDetails.find(card=>card.id == id)
        setJob(jobData)
    },[])
    return (
        <div>
            <Cart job={job}></Cart>
        </div>
    );
};

export default Details;