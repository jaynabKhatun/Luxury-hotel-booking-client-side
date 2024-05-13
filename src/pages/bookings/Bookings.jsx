import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleBooking from "./SingleBooking";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }

        , [])

    return (
        <div className="min-h-[calc(100vh-88px)]">
            <h1>this is bookings page{bookings.length}</h1>
            <div >
                {
                    bookings.map(booking => <SingleBooking key={booking._id} booking={booking}></SingleBooking>)
                }
            </div>
        </div>
    );
};

export default Bookings;