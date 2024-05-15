import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../../src/assets/logo/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";


const UpdateBookings = () => {
    const updateBookings = useLoaderData();
    const { room_size, price, availability, date, service_name, _id
    } = updateBookings;
    const { user } = useContext(AuthContext);
    // console.log(updateBookings);
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        })
    }, [])
    const navigate = useNavigate();


    //handle update button


    const handleUpdateBooking = (e) => {
        e.preventDefault()
        // console.log('pressd')

        const form = e.target
        const name = form.service_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const room_size = form.room_size.value;
        const availability = form.availability.value;
        const date = form.date.value;
        const updateBookings = { email, price, room_size, availability, date, service_name, name }

        // console.log(updateBookings);

        //update single booking information
        fetch(`https://hotel-server-blond.vercel.app/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your booking has been updated successfully',
                        showConfirmButton: false,
                        timer: 1500


                    })
                    navigate('/bookings')
                }
            })



    }

    return (
        <div className="bg-base-200 p-8 relative min-h-[calc(100vh-80px)] mt-4 mb-8 bg-no-repeat bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/WD8HbCq/28417165.jpg) ' }} >
            <h1 className="text-center font-mim text-2xl " data-aos="zoom-in-up">Update Your Room</h1>
            <img className="container mx-auto h-16" src={logo} alt="" data-aos="zoom-in-down" />
            <h1 className="text-2xl font-mim text-center font-bold"  >{name}</h1>


            <form onSubmit={handleUpdateBooking}

                className="container  flex flex-col mx-auto space-y-12 mt-10">

                <fieldset className="grid  font-mim font-bold  text-xl md:grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">

                    <div className="grid grid-cols-6 gap-4  ">

                        <div className="col-span-full " data-aos="zoom-in-up">
                            <label htmlFor="email" className="text-lg text-white">email
                            </label>
                            <input name='email' type="email" defaultValue={user?.email} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>
                        <div className="col-span-full " data-aos="zoom-in-up">
                            <label className="text-lg text-white"> Service name
                            </label>
                            <input name='service_name' type="text" defaultValue={service_name} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>


                        <div className="col-span-full sm:col-span-3" data-aos="zoom-in-up">
                            <label className="text-lg text-white"> Price per night</label>
                            <input id="price" name='price' type="text" defaultValue={price} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>



                        <div className="col-span-full sm:col-span-3" data-aos="zoom-in-up">
                            <label className="text-lg text-white">Room size
                            </label>
                            <input name='room_size' type="text" defaultValue={room_size} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3" data-aos="zoom-in-up">
                            <label className="text-lg text-white">availability
                            </label>
                            <input name='availability' type="text" defaultValue={availability} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3" data-aos="zoom-in-up">
                            <label className="text-lg text-white">Pick a date
                            </label>
                            <input name='date' type="date" defaultValue={date} required className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                        </div>






                        <div className="col-span-full  " data-aos="zoom-in-up">


                            <input value="Update Booking" type="submit" className="w-full mt-8 btn  font-bold  shadow-xl p-2" />



                        </div>
                    </div>


                </fieldset>

            </form>



        </div>

    );
};

export default UpdateBookings;