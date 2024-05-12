import { Link } from "react-router-dom";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Login = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        })
    }, [])

    return (

        <div className="hero md:min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/qCMf2wH/register-image.jpg)' }}>


            <div className="card   w-full max-w-screen-sm shadow-2xl border  bg-transparent " data-aos="fade-up">

                <form className="card-body " >
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" data-aos="fade-up">Login</button>
                    </div>
                    <p className="text-center" data-aos="fade-up">Don't have account <Link to={'/register'} className="text-blue-600 ">REGISTER</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Login;