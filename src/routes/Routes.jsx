import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import RoomDetailsPage from "../pages/roomDetailsPage/RoomDetailsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import UpdateBookings from "../pages/bookings/UpdateBookings";

const router = createBrowserRouter([


    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/roomDetailsPage/:id',
                element: <RoomDetailsPage></RoomDetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            },
            {
                path: '/updateBookings/:id',
                element: <UpdateBookings></UpdateBookings>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

        ],





    },


    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Registration></Registration>
    }


]);

export default router;