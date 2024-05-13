import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Marquee from "react-fast-marquee";



const RoomDetailsPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        })
    }, [])
    const room = useLoaderData();
    const { image, description, name, special_offers, availability, room_size, price_per_night } = room;
    return (

        <div>
            <Marquee direction="left" speed={100} pauseOnHover={true}>
                <div>
                    <h2 className="text-center font-serif text-3xl tracking-wider  font-bold">special_offers: {special_offers}
                    </h2>

                </div>
            </Marquee>


            <div className="md:min-h-[calc(100vh-70px)] md:flex items-center  ">

                <div className="grid md:grid-cols-2 md:gap-10">
                    <div className="w-2/2">
                        <img src={image} alt="" />

                    </div>

                    <div className="flex justify-center items-center">
                        <h1 className="font-mim mt-6 text-2xl ">{description}</h1>
                    </div>
                </div>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-10 p-4 md:-mt-20">
                <div className="md:h-[500px] ">
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
                <div className="bg-base-200 p-8 relative" >


                    <h1 className="text-center font-mim  text-2xl font-bold p-4">{name} <div className="badge badge-primary p-4 ml-6 ">{availability}</div></h1>
                    <h1 className="p-8 font-mim text-xl">{description}</h1>

                    <div className="flex justify-center">
                        <h1 className="font-bold text-lg ">Room Size: <span className="text-2xl text-black">{room_size}</span></h1>

                    </div>
                    <h1 className="flex justify-center mt-4 font-bold text-lg">Price per night:  <span className="text-2xl text-black">{price_per_night}$ </span></h1>
                    <div className="flex justify-end absolute bottom-6 right-4">  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">book now</button></div>


                </div>


            </div>

        </div>
    );
};

export default RoomDetailsPage;