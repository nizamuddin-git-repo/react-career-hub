import user from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-5">
            <div className="w-6/12">
                <h1 className="font-extrabold text-5xl">One Step Closer To Your <span className="bg-gradient-to-r bg-300% from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Dream Job</span></h1>
                <p className='text-xs mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary ml-5 mt-5  border-0  bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-700'>Get Started</button>
            </div>
            <div className="w-6/12">
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;