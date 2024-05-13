import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";



const Cards = () => {
    const [rooms, setRooms] = useState();
    console.log(rooms);


    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)

            })


    }
        , [])
    return (
        <div className="grid md:grid-cols-3 gap-2  mt-16">
            {
                rooms?.map(rooms => <SingleRoom key={rooms.id} room={rooms} />)
            }
        </div>
    );
};

export default Cards;