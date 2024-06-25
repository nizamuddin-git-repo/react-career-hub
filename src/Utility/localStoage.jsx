
const getStoredJobApplication = () => {
    const storedJobAppliction = localStorage.getItem('job-applictions');
    if(storedJobAppliction){
        return JSON.parse(storedJobAppliction);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedJobApplictions = getStoredJobApplication();
    const exists = storedJobApplictions.find(jobId => jobId === id)
    if(!exists){
        storedJobApplictions.push(id);
        localStorage.setItem('job-applictions', JSON.stringify(storedJobApplictions))
    }
}


export {getStoredJobApplication, saveJobApplication}