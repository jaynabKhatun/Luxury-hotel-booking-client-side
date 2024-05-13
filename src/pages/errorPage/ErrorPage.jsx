import Lottie from "lottie-react";
import error from '../../../public/Animation - 1715626791525.json'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie className='w-[50%]' animationData={error} loop={true}></Lottie>
            <Link to={'/'}
                className="btn btn-primary">Take me Home</Link>
        </div>
    );
};

export default ErrorPage;