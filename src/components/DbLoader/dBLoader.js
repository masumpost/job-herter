import { getShoppingCart } from "../Utilities/ConnectPage"

const dBJobsLoader = async () => {
const loadedJobs = await fetch('/featuredJob.json');
const jobs = await loadedJobs.json();
// console.log(jobs);

const storedCart = getShoppingCart();
const savedJobs = [];

for(const id in storedCart){
    const addedJobs = jobs.find(jb => jb.id === id)
    if(addedJobs){
        const quantity = storedCart[id];
        addedJobs.quantity = quantity;
        savedJobs.push(addedJobs); 
    }
}

return savedJobs;
}

export default dBJobsLoader

