import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SubscriptionLt = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])


    return (
        <div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className="w-full  mt-16 mb-16  " style={{ backgroundImage: 'url(https://i.ibb.co/F7y0tJm/photo-1714836999719-86884fbe3ee2.jpg) ' }}  >
                <div className="container flex flex-col  flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionLt;