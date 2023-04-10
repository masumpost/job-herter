import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <JobCategory></JobCategory>
        <FeaturedJob></FeaturedJob>
      </div>
    );
};

export default Home;