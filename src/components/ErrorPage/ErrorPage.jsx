import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center justify-center mt-60">
            <h1 className="text-secondary text-5xl">Oopps!!!</h1>
            <div className="mt-10">
            <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;