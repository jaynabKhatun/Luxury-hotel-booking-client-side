import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate()


    const handleReview = e => {

        e.preventDefault();
        const form = e.target
        const username = form.username.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const photo = user?.photoURL
        const rev = form.rev.value;

        const review = { username, email, rating, time, photo, rev }
        // console.log(review);

        //add review to database
        fetch('https://hotel-server-blond.vercel.app/review',  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review added successfully')

                }
                navigate('/bookings')

            })

    }
    return (
        <div className="min-h-[calc(100vh-80px)]  flex justify-center ">


            <section className="max-w-4xl p-6 mx-auto  mt-12 bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Give Review</h2>

                <form onSubmit={handleReview}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Username</label>
                            <input id="username" defaultValue={user?.displayName} type="text" name="username" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                            <input id="emailAddress" name="email" required defaultValue={user?.email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Rating</label>
                            <input id="text" type="text" required name="rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Time</label>
                            <input id="date" type="date" required name="time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Review</label>
                            <input id="rev" type="text" required name="rev" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <input className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="Submit Review" />
                    </div>
                </form>
            </section>

        </div>
    );
};

export default Review;