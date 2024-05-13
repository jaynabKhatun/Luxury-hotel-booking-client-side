import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const RoomDetailsPage = () => {
    const room = useLoaderData();
    console.log(room);
    return (
        <div className="min-h-[calc(100vh-90px)]">

            <h1>this is room details page</h1>
        </div>
    );
};

export default RoomDetailsPage;