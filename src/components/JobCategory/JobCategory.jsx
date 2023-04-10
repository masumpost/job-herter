import React, { useEffect, useState } from "react";
import JobCard from "../jobCard/jobCard";


const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
    // console.log(category)
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-center my-5">Job Category List</h1>
      <p className="font-semibold text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    <div className="md:flex gap-5 justify-center my-10">
    {
        category.map(cards => <JobCard
        key={cards.id}
        cards={cards}
        ></JobCard>)
    }
    </div>
    </div>
  );
};

export default JobCategory;
