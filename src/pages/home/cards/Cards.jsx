import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";



const Cards = () => {
    const [rooms, setRooms] = useState();
    // console.log(rooms);


    useEffect(() => {
        fetch('https://hotel-server-blond.vercel.app/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)

            })


    }
        , [])
    return (
        <div>
            <h1 className="font-mim text-4xl text-center mt-20 bg-base-200 mb-4" data-aos="fade-up"
                data-aos-anchor-placement="top">Our Featured Collection</h1>
            <div className="grid md:grid-cols-3 gap-2  mt-16">
                {
                    rooms?.slice(0, 9).map(rooms => <SingleRoom key={rooms.id} room={rooms} />)
                }
            </div>
        </div>
    );
};

export default Cards;