import { useEffect, useState } from "react";
import ShowAllRooms from "./ShowAllRooms";


const AllRoom = () => {
    const [rooms, setRooms] = useState([]);
    // console.log(rooms);
    useEffect(() => {
        fetch('https://hotel-server-blond.vercel.app/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })

    }, [])


    return (
        <div>
            <h1 className="text-center font-mim text-4xl mt-4 bg-base-200">Our All Rooms Collection</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    rooms?.map(room => <ShowAllRooms key={room._id} room={room}></ShowAllRooms>)
                }
            </div>
        </div>
    );
};

export default AllRoom;