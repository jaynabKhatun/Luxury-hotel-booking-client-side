import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from 'react-hot-toast';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        })
    }, [])

    const handleLogOut = () => {
        console.log('logout');
        logOut()
            .then(result => {
                toast.success('Logout Successfull')
            })
            .catch(error => {
                toast.error(error.message)
            })


    }

    return (
        <div className='navbar  shadow-2xl bg-base-200 bg'>
            <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />

                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>

                    {
                        user && <li>
                            <NavLink to={'/rooms'}>Rooms</NavLink>
                        </li>
                    }
                    {
                        user && <li>
                            <NavLink to={'/bookings'}>My Bookings</NavLink>
                        </li>
                    }
                    {
                        !user && <li>
                            <NavLink to={'/login'}>Login</NavLink>
                        </li>
                    }
                </ul>

                {
                        user && <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName}
                                    className='w-10 rounded-full'
                                >
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                <li>
                                    <div className='justify-between'>Add Job</div>
                                </li>
                                <li>
                                    <div>My Posted Jobs</div>
                                </li>
                                <li>
                                    <div>My Bids</div>
                                </li>
                                <li>
                                    <div>Bid Requests</div>
                                </li>
                                <li className='mt-2'>
                                    <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                                </li>
                            </ul>
                        </div>
                    }
            </div>
        </div>



        
    );
};

export default Navbar;