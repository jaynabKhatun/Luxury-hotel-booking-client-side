import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleBooking from "./SingleBooking";
import Swal from "sweetalert2";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://hotel-server-blond.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBookings(data))
    }

        , [url])



    //handle delete booking
    const handleCancelBooking = (id) => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://hotel-server-blond.vercel.app/bookings/${id}`, {
                    method: "DELETE"
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been canceled.",
                                "success"
                            );
                            setBookings(bookings.filter(booking => booking._id !== id))
                        }
                    })
            }


        })


    }



    return (
        <div className="min-h-[calc(100vh-88px)]">
            <button className="badge badge-warning mt-3 text-white font-bold p-3">Total Bookings: {bookings.length}</button>
            <div >
                {
                    bookings?.map(booking =>
                        <SingleBooking
                            key={booking._id}
                            handleCancelBooking={handleCancelBooking}
                            booking={booking}

                        >


                        </SingleBooking>)
                }
            </div>
        </div>
    );
};


export default Bookings;