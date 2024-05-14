import { useLoaderData, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../provider/AuthProvider";



import Swal from "sweetalert2";



const RoomDetailsPage = () => {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        })
    }, [])
    const room = useLoaderData();
    const { image, description, _id, name, special_offers, availability, room_size, price_per_night } = room;
    const navigate = useNavigate();

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const price = form.price.value;
        const room_size = form.room_size.value;
        const availability = form.availability.value;
        const date = form.date.value;
        const email = user?.email;

        const newBooking = {
            price, room_size, availability, date, email,
            service_id: _id,
            images: image,
            service_name: name
        };
        console.log(newBooking);


        //insert new booking on mongodb

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())

            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Booking is Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/bookings')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                }

            })


    }








    return (

        <div>
            <Marquee direction="left" speed={100} pauseOnHover={true}>
                <div>
                    <h2 className="text-center text-red-600  font-serif text-3xl tracking-wider  font-bold">Special Offers Here : <span className="text-black">{special_offers}</span>
                    </h2>

                </div>
            </Marquee>


            <div className="md:min-h-[calc(100vh-70px)] md:flex items-center  ">

                <div className="grid md:grid-cols-2 md:gap-10 ">
                    <div className="w-2/2">
                        <img src={image} alt="" />

                    </div>


                    <div className="flex justify-center items-center">

                        <h1 className="font-mim mt-6 text-2xl ">{description}</h1>

                    </div>
                </div>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-10 p-4 md:-mt-20">
                {/* review section */}
                <div className="md:h-[500px]  ">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Give Review</h2>

                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Username</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                                    <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Password</label>
                                    <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Password Confirmation</label>
                                    <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>
                        </form>
                    </section>

                </div>
                {/* booking form section */}
                <div className="bg-base-200 p-8 relative " style={{ backgroundImage: 'url(https://i.ibb.co/0Bs8b6W/photo-1618220048045-10a6dbdf83e0.jpg)' }} >
                    <h1 className="text-center font-mim text-lg ">Book Your Room</h1>
                    <h1 className="text-2xl font-mim text-center font-bold">{name}</h1>


                    <form onSubmit={handleBooking}

                        className="container flex flex-col mx-auto space-y-12">

                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">


                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor=" item_name" className="text-sm"> Price per night</label>
                                    <input id="price" name='price' type="text" defaultValue={price_per_night} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                                </div>



                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="price" className="text-sm">Room size
                                    </label>
                                    <input name='room_size' type="text" defaultValue={room_size} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="price" className="text-sm">availability
                                    </label>
                                    <input name='availability' type="text" defaultValue={availability} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="price" className="text-sm">Pick a date
                                    </label>
                                    <input name='date' type="date" required className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                                </div>



                                <div className="col-span-full ">
                                    <label htmlFor="Name" className="text-sm">email
                                    </label>
                                    <input name='email' type="text" defaultValue={user?.email} className="w-full rounded-md border-b-2 border-black shadow-xl p-2" />
                                </div>


                                <div className="col-span-full  ">


                                    <input value="Book" type="submit" className="w-full btn  font-bold  shadow-xl p-2" />



                                </div>
                            </div>


                        </fieldset>

                    </form>



                </div>


            </div>

        </div>
    );
};

export default RoomDetailsPage;