import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleBooking = ({ booking, handleCancelBooking }) => {
    console.log(booking);




    const { images, service_name, _id, date, price, room_size, email
    } = booking;
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        })
    }, [])




    return (
        <div className="mt-8 mb-8">
            <div className="card card-side  bg-base-100 p-2 hover:scale-105 transition hover:border-green-600  shadow-xl border " data-aos="fade-up"
                data-aos-duration="3000">
                <figure><img className="hover:scale-x-110 w-80" src={images} alt="Movie" /></figure>
                <div className="card-body ">
                    <h2 className="card-title font-mim text-2xl hover:scale-105" >{service_name}</h2>
                    <p className="badge badge-accent hover:scale-105 text-white p-4 font-bold" data-aos="fade-up-right">Booked Date :{date}</p>
                    <p className="badge badge-secondary hover:scale-105 text-white p-4 font-bold" data-aos="fade-up-left">Price : ${price}</p>
                    <p className="badge badge-secondary hover:scale-105 text-white p-4 font-bold" data-aos="fade-up-right">Price : ${room_size}</p>
                    <p className="badge badge-secondary hover:scale-105 text-white p-4 font-bold" data-aos="fade-up-left">Price : ${email}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/updateBookings/${_id}`}><button className="btn btn-primary" data-aos="fade-up-left">Update</button></Link>

                        <button onClick={() => handleCancelBooking(_id)} className="btn btn-error" data-aos="fade-down-right">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleBooking.propTypes = {
    booking: propTypes.object.isRequired,
    handleCancelBooking: propTypes.func.isRequired,
    handleUpdateBooking: propTypes.func.isRequired,
};


export default SingleBooking;