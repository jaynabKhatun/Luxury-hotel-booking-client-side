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
import Review from "../pages/reviewPage/Review";
import AllRoom from "../pages/rooms/AllRoom";

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
                element: <PrivateRoutes><RoomDetailsPage></RoomDetailsPage></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://hotel-server-blond.vercel.app/rooms/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            },
            {
                path: '/updateBookings/:id',
                element: <UpdateBookings></UpdateBookings>,
                loader: ({ params }) => fetch(`https://hotel-server-blond.vercel.app/bookings/${params.id}`,)
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/rooms',
                element: <AllRoom></AllRoom>,

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