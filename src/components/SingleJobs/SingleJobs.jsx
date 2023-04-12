import { layer } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocation, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const SingleJobs = ({ singleJob }) => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    location,
    remoteOrOnsite,
    salary,
    workingTine,
  } = singleJob;
  // console.log(companyName)
  return (
    <div className="flex justify-between w-3/5 mx-auto items-center mt-8 bg-red-50 p-4 rounded">
      <div className="flex gap-4">
        <div>
          <img className="w-32 h-32" src={companyLogo} alt="" />
        </div>
        <div>
          <h5 className="text-2xl font-semibold">{jobTitle}</h5>
          <h5 className="text-2xl my-2">{companyName}</h5>
          <p>
            <button className="btn btn-outline">{remoteOrOnsite}</button>
            <button className="btn btn-outline">{workingTine}</button>
          </p>
          <p>
          <span className="mr-4"><FontAwesomeIcon icon={faLocation} />{location}</span> <FontAwesomeIcon icon={faDollarSign} /> {salary}
          </p>
        </div>
      </div>
      <div>
      <button class="btn btn-active btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default SingleJobs;
