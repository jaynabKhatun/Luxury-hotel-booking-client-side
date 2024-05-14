import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {

    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        })
    }, [])




    // create new user
    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, photo, email, password };
        console.log(newUser);
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters')
            return
        } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            return toast.error('Password must contain at least one uppercase and lowercase letter')
        }



        try {
            //2. User Registration
            const result = await createUser(email, password)

            await updateUserProfile(name, photo)
            // Optimistic UI Update
            setUser({ ...result?.user, photoURL: photo, displayName: name })

            navigate('/')
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }











    return (

        <div className="hero md:min-h-screen relative " style={{ backgroundImage: 'url(https://i.ibb.co/tpYb6PK/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg)' }}>


            <NavLink to={'/'} className="absolute top-7 right-10 border p-2 border-white font-mim font-bold"> Home</NavLink>
            <div className="card   w-full max-w-screen-sm shadow-2xl border  bg-transparent " data-aos="fade-up">

                <img className="h-24 mt-4" src={logo} alt="" />
                <h1 className="font-mim text-2xl text-center">Register</h1>

                <form onSubmit={handleSignUp}

                    className="card-body " >

                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="photo Url" name="photo" className="input input-bordered"/>
                    </div>
                    <div className="form-control" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                        <button className="btn btn-primary" data-aos="fade-up">REGISTER</button>
                    </div>
                    <p className="text-center " > Have an account ? <Link to={'/login'} className="text-blue-600 ">Log in</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Registration;