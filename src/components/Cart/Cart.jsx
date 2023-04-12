import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCalendarCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import'./Cart.css'
import { addToDb } from '../Utilities/ConnectPage';

const Cart = ({job}) => {
    const{id, JobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,location, phone, email, companyName, companyLogo, workingTine, remoteOrOnsite } = job
    
    const handelAddToDb = (id, JobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,location, phone, email, companyName, companyLogo, workingTine, remoteOrOnsite ) =>{
        const previousJobs = JSON.parse(localStorage.getItem("job"));
        let job = [];
        const object = {id, JobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,location, phone, email, companyName, companyLogo, workingTine, remoteOrOnsite, job:true }

        if (previousJobs) {
            const isThisProductMarked = previousJobs.find(i => i.id == id);
            if (isThisProductMarked) {
                alert("Your previous submissions are pending...");
            }
            else{
                job.push(...previousJobs, object)
                localStorage.setItem("job", JSON.stringify(job))
            }
        }
        else {
            job.push(object);
            localStorage.setItem("job", JSON.stringify(job))
        }
    }

    return (
        <>
            <h2 className='text-center text-3xl font-semibold my-10'>Job Details</h2>

            <div className='mx-4 dCart md:mx-40'>
                <div>
                    <p><span className='font-semibold'>Job Description : </span>{JobDescription}</p>
                    <hr className='my-4'/>
                    <p><span className='font-semibold'>Job Responsibility : </span>{jobResponsibility}</p>
                    <hr className='my-4'/>
                    <p><span className='font-semibold my-4'>Educational Requirements : </span></p>
                    <p>{educationalRequirements}</p>
                    <hr className='my-4'/>
                    <p><span className='font-semibold my-4'>Experiences : </span></p>
                    <p>{experiences}</p>
                </div>
                <div>
                   <div className='bg-slate-200 p-4'>
                   <h5 className='font-bold text-xl my-4'>Job Details :</h5><hr className='py-3'/>
                    <p><FontAwesomeIcon icon={faDollarSign} /><span className='font-semibold'> Salary : </span>{salary}</p><br />
                    <p><FontAwesomeIcon icon={faCalendarCheck} /><span className='font-semibold'> Job Title : </span>{jobTitle}</p><br />

                    <h5 className='font-bold text-xl my-4'>Contact Information</h5><hr className='py-3'/>
                    <p><FontAwesomeIcon icon={faPhone} /><span className='font-semibold'>  Phone : </span>{phone}</p><br />
                    <p><FontAwesomeIcon icon={faEnvelope} /><span className='font-semibold'> Email : </span>{email}</p><br />
                    <p><FontAwesomeIcon icon={faLocationDot} /><span className='font-semibold'> Location : </span>{location}</p><br />
                   </div>
                   <div className='my-4'>
                   <button onClick={()=>handelAddToDb(id, JobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,location, phone, email, companyName, companyLogo, workingTine, remoteOrOnsite )} className="btn btn-active btn-primary w-full">Apply Now</button>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Cart;