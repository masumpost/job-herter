import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    console.log(prams)
    const cardDetails = useLoaderData()
    return (
        <div>
            <h1>This is details page</h1>
        </div>
    );
};

export default Details;