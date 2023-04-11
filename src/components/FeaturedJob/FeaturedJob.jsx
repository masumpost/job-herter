import React, { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const FeaturedJob = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);
  let handelShowAll = () => {
    setShowAll(true);
  };
  useEffect(() => {
    fetch("featuredJob.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-4xl my-6">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 rounded my-12">
        {features.slice(0, showAll ? 6 : 4).map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>

      {/* show all button */}
          <div className="text-center">
          {!showAll && (
          <button
            onClick={handelShowAll}
            className="btn btn-active btn-primary"
          >
            Show All
          </button>
        )}
          </div>
    </div>
  );
};

export default FeaturedJob;
