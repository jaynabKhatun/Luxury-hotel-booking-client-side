import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react'
import logo from '../../../src/assets/logo/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";





const Login = () => {


    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()




    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        })
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const newuser = { email, password };
        console.log(newuser);
        //Log in user
        signIn(email, password)
            .then(result => {

                console.log(result.user)
                toast.success('Login Successfull')

                navigate(location?.state ? location?.state : '/');


                // get access token
                // axios.post('https://hotel-server-blond.vercel.app/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {



                //         }
                //     })


            })
            .catch(error => {

                toast.error(error.message)
            })


    }

    const handleGoogleLogin = () => {
        // console.log('Google Login');
        signInWithGoogle()
            .then(result => {
                console.log(result.user)


                toast.success('Login Successfull')


                navigate('/')

            })
            .catch(error => {
                console.log(error.message)
            })
    }








    return (

        <div className="hero md:min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/qCMf2wH/register-image.jpg)' }}>


            <div className="card   w-full max-w-screen-sm shadow-2xl border  bg-transparent " data-aos="fade-up">
                <img className="h-20" src={logo} alt="" />
                <h1 className="font-mim text-3xl text-center">Log in</h1>

                <form onSubmit={handleLogin}
                    className="card-body " >
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input data-aos="fade-up" type="submit" className="btn btn-primary" value="Login" />
                    </div>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                        <div className="flex justify-center items-center gap-6  " >
                            <div onClick={handleGoogleLogin}><FaGoogle className="text-2xl" data-aos="fade-down" /></div>

                        </div>
                    </div>
                    <p className="text-center" data-aos="fade-up">Dont have account <Link to={'/register'} className="text-blue-600 ">REGISTER</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Login;